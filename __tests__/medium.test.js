import { clamp, average } from "../functions/medium";

describe("clamp function", () => {
  test("should return 5", () => {
    expect(clamp(5, 1, 10)).toBe(5);
  });

  test("to throw an error", () => {
    try {
      expect(clamp(5, 10, 1)).toThrow("Invalid range");
    } catch (err) {}
  });
});

describe("average", () => {
  test("avg with 4,5,6", () => {
    expect(average([4, 5, 6])).toBe(5);
  });

  test("to throw an error", () => {
    try {
      expect(() => {
        average("abc");
      }).toThrow("Average requires a non-empty array of numbers");

      expect(() => {
        average([]);
      }).toThrow("Average requires a non-empty array of numbers");
    } catch (err) {}
  });
});
