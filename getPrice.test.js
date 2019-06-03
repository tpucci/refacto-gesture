const { getPrice } = require("./getPrice");

describe("[function] getPrice", () => {
  it("computes the total price", () => {
    expect(
      getPrice({
        quantity: 10,
        itemPrice: 5
      })
    ).toEqual(55);
  });
  it("computes the total price with discount", () => {
    expect(
      getPrice({
        quantity: 1000,
        itemPrice: 5
      })
    ).toEqual(4975);
  });
});
