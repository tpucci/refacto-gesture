function main(order) {
  const basePrice = getBasePrice(order);
  const quantityDiscount = getDiscountPrice(order);
  const shippingPrice = getShippingPrice(order);
  return basePrice - quantityDiscount + shippingPrice;
}

console.log(
  main({
    quantity: 5,
    itemPrice: 8
  })
);

function getShippingPrice(order) {
  return Math.min(order.quantity * order.itemPrice * 0.1, 100);
}

function getDiscountPrice(order) {
  return Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
}

function getBasePrice(order) {
  return order.quantity * order.itemPrice;
}

module.exports = { main };
