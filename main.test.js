const { main } = require("./main");

describe("[function] main", () => {
  it("computes the total price", () => {
    expect(main(10, 5)).toEqual(55);
  });
  it("computes the total price with discount", () => {
    expect(main(1000, 5)).toEqual(4975);
  });
});
