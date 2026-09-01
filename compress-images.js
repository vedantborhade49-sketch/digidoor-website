import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function compressDirectory(sourceDir, destDir) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const entries = fs.readdirSync(sourceDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(sourceDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      await compressDirectory(srcPath, destPath);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        try {
          const metadata = await sharp(srcPath).metadata();
          let img = sharp(srcPath);
          
          if (metadata.width > 1280) {
            img = img.resize(1280);
          }
          
          if (metadata.format === 'webp') {
            img = img.webp({ quality: 60 });
          } else if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
            img = img.jpeg({ quality: 60 });
          } else if (metadata.format === 'png') {
            img = img.png({ quality: 60 });
          }
          
          await img.toFile(destPath);
        } catch(e) {
          console.error('Failed compressing', srcPath, e);
          fs.copyFileSync(srcPath, destPath);
        }
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
}

async function main() {
  console.log('Starting image compression to new directories to avoid locks...');
  const dirs = ['public/images', 'public/assets/hero/frames'];
  for (const dir of dirs) {
    if (fs.existsSync(dir)) {
      console.log(`Processing directory: ${dir}`);
      const destDir = dir + '_compressed';
      await compressDirectory(dir, destDir);
      
      try {
        const oldDir = dir + '_old_' + Date.now();
        fs.renameSync(dir, oldDir);
        fs.renameSync(destDir, dir);
        fs.rmSync(oldDir, { recursive: true, force: true });
        console.log(`Successfully replaced ${dir}`);
      } catch (err) {
        console.error(`Failed to replace directory ${dir}`, err);
      }
    }
  }
  console.log('Finished image compression!');
}

main();
