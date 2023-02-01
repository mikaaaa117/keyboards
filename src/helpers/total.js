const total = array => {
  const initialValue = 0;
  if (array && array !== []) {
    const cartsItemsSum = array.reduce(
      (previousValue, currentObject) => previousValue + currentObject.price,
      initialValue
    );
    return cartsItemsSum;
  }
  return initialValue;
};

export default total;
