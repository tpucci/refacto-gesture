const { main } = require("./main");

describe("[function] main", () => {
  it("computes the total price", () => {
    expect(
      main({
        quantity: 10,
        itemPrice: 5
      })
    ).toEqual(55);
  });
  it("computes the total price with discount", () => {
    expect(
      main({
        quantity: 1000,
        itemPrice: 5
      })
    ).toEqual(4975);
  });
});
