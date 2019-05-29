function main(quantity, itemPrice) {
  const order = {
    quantity,
    itemPrice
  };
  return (
    order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
  );
}

console.log(main(5, 8));

module.exports = { main };
