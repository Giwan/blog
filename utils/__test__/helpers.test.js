import { getDateNumber } from "../helpers";

describe("get date number", () => {
    it("should return a date number", () => {
        expect(() => getDateNumber()).toThrowErrorMatchingSnapshot();
        expect(() => getDateNumber(1)).toThrowErrorMatchingSnapshot();
        expect(getDateNumber("")).toBe(0);
        expect(getDateNumber("-")).toBe(0);
        expect(getDateNumber("somerandomstring")).toBe(0);
        expect(getDateNumber("10-10-1980")).toBe(10101980);
    });
});
