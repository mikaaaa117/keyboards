const truncateString = (string, count) => {
  if (string.length >= count) {
    return string.substring(0, count) + '...';
  }
  return string;
};

export default truncateString;
