const { Jimp } = require('jimp');

async function removeBackground() {
  try {
    const image = await Jimp.read('public/logo.jpg');
    
    // Iterate over every pixel
    image.scan((x, y, idx) => {
      const red = image.bitmap.data[idx + 0];
      const green = image.bitmap.data[idx + 1];
      const blue = image.bitmap.data[idx + 2];
      
      // If the pixel is close to white, make it transparent
      if (red > 200 && green > 200 && blue > 200) {
        image.bitmap.data[idx + 3] = 0; // Alpha channel
      } else {
        // Also let's make the logo white so it shows up on the dark background!
        // But the user didn't ask to change the color, just remove the background.
        // The navbar turns white when scrolled, so if we make it white, it'll disappear on scroll.
        // Let's keep its original color.
      }
    });

    await image.write('public/logo.png');
    console.log('Background removed, saved as public/logo.png');
  } catch (err) {
    console.error('Error:', err);
  }
}

removeBackground();
