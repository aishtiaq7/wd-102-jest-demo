import { shout  } from "../functions/functions";
import { jest } from "@jest/globals";

describe("Moc functions", ()=> {
    test("shout uppercase and logs", ()=>{

        const logger = jest.fn();
    
        const result = shout("hello", logger);

        expect (result).toBe("HELLO");
        expect (logger).toHaveBeenCalledTimes(1);
        expect(logger).toHaveBeenCalledWith("HELLO");

    })
})