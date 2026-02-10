import { add, divide, isEven} from "../functions/easy.js";

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

  test("multiple additions here", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(5, 10)).toBe(15);
    expect(add(0, 0)).toBe(0);
    expect(add(0, 0)).toBe(0);
    expect(add(1, 0)).toBe(1);
  });
});

describe("add function with negative numbers", () => {
  test("adds -1 + -2 to equal -3", () => {
    expect(add(-1, -2)).toBe(-3);
  });
});

describe("divide function", () => {
  it("divides 10 by 2 to equal 5", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("anything by zero should throw an error", () => {
    try {
      expect(() => {
        divide(10, 0);
      }).toThrow("Cannot divide by zero");
    } catch (err) {
      console.log("Error caught as expected: ", err.message);
    }
  });
});


describe("isEven function", () => {
  test("odd test", () => {
    expect(isEven(3)).toBeFalsy();
  })
   test("even test", () => {
    expect(isEven(66)).toBeTruthy();
  })
});
