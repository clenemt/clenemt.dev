const { format, formatISO } = require('date-fns');

module.exports = {
  format: format,
  formatISO: formatISO,
  next: (collection, itemToFind) => {
    const index = collection.findIndex((item) => item.inputPath === itemToFind.inputPath);
    return -1 < index && index < collection.length ? collection[index + 1] : null;
  },
  prev: (collection, itemToFind) => {
    const index = collection.findIndex((item) => item.inputPath === itemToFind.inputPath);
    return index > 0 ? collection[index - 1] : null;
  }
};
