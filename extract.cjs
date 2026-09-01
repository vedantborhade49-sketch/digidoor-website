const cp = require('child_process');
const ffmpeg = require('ffmpeg-static');
const path = require('path');

const inputFile = path.join(__dirname, 'public', 'Untitled design (1).mp4');
const outputPattern = path.join(__dirname, 'public', 'assets', 'hero', 'frames', 'frame_%04d.jpg');

console.log(`Extracting frames using ${ffmpeg}...`);
console.log(`Input: ${inputFile}`);
console.log(`Output: ${outputPattern}`);

try {
  cp.execSync(`"${ffmpeg}" -i "${inputFile}" -vf "scale=1280:-1,fps=15" -qscale:v 3 "${outputPattern}"`, { stdio: 'inherit' });
  console.log("Extraction complete!");
} catch (e) {
  console.error("Error extracting frames:", e);
}
