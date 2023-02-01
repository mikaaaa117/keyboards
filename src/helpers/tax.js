const tax = (num, percent) => {
  return Math.round((num / 100) * percent * 100) / 100;
};

export default tax;
