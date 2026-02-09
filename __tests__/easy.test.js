import { add } from "../functions/easy.js";

describe("add function", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("add 5 + 10 to equal 15", () => {
    expect(add(5, 10)).toBe(15);
  });

  test("add 0 + 0 to equal 0", () => {
    expect(add(0, 0)).toBe(0);
  });

  test("multiple additions here", ()=>{
    expect(add(1, 2)).toBe(30);
    expect(add(5, 10)).toBe(15);
    expect(add(0, 0)).toBe(0);
    expect(add(0, 0)).toBe(0);
    expect(add(1, 0)).toBe(1);
  })
});

describe("add function with negative numbers", () => {
    test("adds -1 + -2 to equal -3", () => {
      expect(add(-1, -2)).toBe(-3);
    });
});
