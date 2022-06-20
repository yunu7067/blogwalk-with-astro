const path = require('path');
const sharp = require('sharp');
const config = require('../../blog.config.js');

const log = msg => console.debug(`[prebuild] ${msg}`);
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const resize = (imagePath, size, format) => {
  return sharp(imagePath)
    .resize(size, size, {
      fit: sharp.fit.inside,
      withoutEnlargement: true,
    })
    .toFormat(format)
    .toFile(`${imagePath}.${size}x${size}.${format}`);
};

const prebuild = async () => {
  // const config = await getConfig();

  // if (config.avatar.enabled) {
  if (true) {
    const avatarAbsoultePath = path.join(PUBLIC_DIR, config.avatar.src);
    const RES_FORMAT = 'webp';
    const SIZES = [32, 64, 96, 128];
    log('Resize avatar image');

    Promise.all(SIZES.map(size => resize(avatarAbsoultePath, size, RES_FORMAT))).then(() => {
      log('Resize avatar image complete');
    });
  }
};

prebuild();
