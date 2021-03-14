const sassdoc = require('sassdoc');

(async (sassdoc) => {
  const options = {
    dest: './docs',
    verbose: true,
  };

  try {
    await sassdoc('./sass', options);
  } catch (error) {
    console.log(error);
  }
})(sassdoc);
