const sharp = require('sharp');

const convert = async () => {
  sharp(input)
    .resize(200, 200, {
      fit: sharp.fit.inside,
      withoutEnlargement: true,
    })
    .toFormat('jpeg')
    .toBuffer()
    .then(function (outputBuffer) {
      // outputBuffer contains JPEG image data
      // no wider and no higher than 200 pixels
      // and no larger than the input image
    });
};
