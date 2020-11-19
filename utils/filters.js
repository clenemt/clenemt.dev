const util = require('util');
const {
  format,
  formatISO,
  formatDistanceToNowStrict,
  parseISO,
  isDate
} = require('date-fns');
const markdown = require('./markdown');

module.exports = {
  format: format,
  formatISO: formatISO,
  formatDistanceToNowStrict: (date) =>
    formatDistanceToNowStrict(isDate(date) ? date : parseISO(date)),

  log: (data) => console.log(`\n\n${util.inspect(data)}\n\n`),
  markdown: (content) => markdown.renderInline(content),
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
