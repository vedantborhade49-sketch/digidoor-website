import { Jimp } from 'jimp';

async function removeBackground() {
  try {
    const image = await Jimp.read('public/logo.jpg');
    
    // Iterate over every pixel
    image.scan((x, y, idx) => {
      const r = image.bitmap.data[idx + 0];
      const g = image.bitmap.data[idx + 1];
      const b = image.bitmap.data[idx + 2];
      
      // The background is white/off-white. The logo is dark blue.
      // Let's assume anything darker than 200 is the logo, and lighter is background.
      const isDark = (r < 200 && g < 200 && b < 200);
      
      if (isDark) {
        // Keep it, but make it pure dark blue (e.g. #082b5c) to remove jpeg artifacts
        image.bitmap.data[idx + 0] = 8;
        image.bitmap.data[idx + 1] = 43;
        image.bitmap.data[idx + 2] = 92;
        image.bitmap.data[idx + 3] = 255;
      } else {
        // Make background perfectly transparent
        image.bitmap.data[idx + 0] = 0;
        image.bitmap.data[idx + 1] = 0;
        image.bitmap.data[idx + 2] = 0;
        image.bitmap.data[idx + 3] = 0;
      }
    });

    await image.write('public/logo.png');
    
    // Also create a white version for the transparent navbar
    const imageWhite = await Jimp.read('public/logo.jpg');
    imageWhite.scan((x, y, idx) => {
      const r = imageWhite.bitmap.data[idx + 0];
      const g = imageWhite.bitmap.data[idx + 1];
      const b = imageWhite.bitmap.data[idx + 2];
      
      const isDark = (r < 200 && g < 200 && b < 200);
      
      if (isDark) {
        // Make it pure white
        imageWhite.bitmap.data[idx + 0] = 255;
        imageWhite.bitmap.data[idx + 1] = 255;
        imageWhite.bitmap.data[idx + 2] = 255;
        imageWhite.bitmap.data[idx + 3] = 255;
      } else {
        // Make background perfectly transparent
        imageWhite.bitmap.data[idx + 0] = 0;
        imageWhite.bitmap.data[idx + 1] = 0;
        imageWhite.bitmap.data[idx + 2] = 0;
        imageWhite.bitmap.data[idx + 3] = 0;
      }
    });
    
    await imageWhite.write('public/logo-white.png');
    console.log('Background removed, saved as public/logo.png and public/logo-white.png');
  } catch (err) {
    console.error('Error:', err);
  }
}

removeBackground();
