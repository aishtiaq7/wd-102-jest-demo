import { shout, sumAndNotify, repeatMessage } from "../functions/functions";
import { jest } from "@jest/globals";

describe("Moc functions", () => {
  test("shout uppercase and logs", () => {
    const logger = jest.fn();

    const result = shout("hello", logger);

    expect(result).toBe("HELLO");
    expect(logger).toHaveBeenCalledTimes(1);
    expect(logger).toHaveBeenCalledWith("HELLO");

  expect(() => {
      shout("random", "not a function");
    }).toThrow("logFun must be a function");

  });
});

describe("sumAndNotify", () => {
  test("shout uppercase and logs", () => {
    const notify = jest.fn();

    const result = sumAndNotify(3, 4, notify);
    expect(result).toBe(7);
    expect(notify).toHaveBeenCalledWith(7);

    expect(() => {
      sumAndNotify(3, 4, "not a function");
    }).toThrow("notifyFn must be a function");
  });
});


describe("repeatMessage", ()=>{
    test("errors", ()=>{
        expect(()=> {
            repeatMessage("hello", 8, "BAD I    NPUT")
        }).toThrow("logFun must be a function");
    });

     test("errors for bad 2nd param", ()=>{
        expect(()=> {
            repeatMessage("hello", 4.1, ()=>{})
        }).toThrow("times must be a non-negative integer");
    }); 

    test("valid params of repeatMessages", ()=>{  
        const notify = jest.fn();

        expect(repeatMessage("hi", 3, notify )).toBe(3)
        expect(notify).toHaveBeenCalledTimes(3);

    });
})