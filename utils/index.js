module.exports = {
  formatString: (str) => {
    const result = str.replace(/\s+/g, '-').toLowerCase();
    return result;
  },
};
