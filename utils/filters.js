const util = require('util');
const { format, formatISO } = require('date-fns');
const markdown = require('./markdown');

module.exports = {
  log: (data) => console.log(`\n\n${util.inspect(data)}\n\n`),
  format: format,
  markdown: (content) => markdown.renderInline(content),
  formatISO: formatISO,
  next: (collection, itemToFind) => {
    const index = collection.findIndex(
      (item) => item.inputPath === itemToFind.inputPath
    );
    return -1 < index && index < collection.length
      ? collection[index + 1]
      : null;
  },
  prev: (collection, itemToFind) => {
    const index = collection.findIndex(
      (item) => item.inputPath === itemToFind.inputPath
    );
    return index > 0 ? collection[index - 1] : null;
  }
};
