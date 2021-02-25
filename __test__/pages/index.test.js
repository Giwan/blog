import { reverseDate } from "../../utils/helpers";

describe("Check that jest is working as expected", () => {
    it("should run a test and perform basic calculations", () => {
        expect(1 + 1).toEqual(2);
        expect(1 + 1).not.toEqual(3);
    });
});

describe("reverseDate", () => {
    it("should reverse the date ", () => {
        expect(reverseDate("11-11-2018")).toEqual(20181111);
        expect(reverseDate("12-12-2020")).toEqual(20201212);
        expect(reverseDate()).toEqual(NaN);
        expect(reverseDate("")).toEqual(NaN);
    });
});
