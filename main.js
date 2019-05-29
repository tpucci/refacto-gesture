function main(quantity, itemPrice) {
  const order = {
    quantity,
    itemPrice
  };
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount =
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shippingPrice = Math.min(order.quantity * order.itemPrice * 0.1, 100);
  return basePrice - quantityDiscount + shippingPrice;
}

console.log(main(5, 8));

module.exports = { main };
