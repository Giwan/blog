import filteredList from "../filteredList";

describe("filtered list ", () => {
    it("should filter the list based on another list", () => {
        expect(filteredList()).toBeUndefined();
        expect(filteredList([])).toEqual([]);
        expect(filteredList(["design"])).toEqual(["design"]);
        expect(filteredList(["design"], [])).toEqual(["design"]);
        expect(filteredList(["design"], ["design"])).toEqual([]);
    });
    it("should return the parent object if the label was found", () => {
        let tools = [{}];
        expect(filteredList(tools)).toEqual(tools);
        expect(filteredList(tools, "design")).toEqual([]);

        tools = [
            {
                category: "design",
            },
        ];
        expect(filteredList(tools, "design")).toEqual(tools);

        tools.push({ category: "writing" });
        expect(filteredList(tools, "writing")).toEqual([
            { category: "writing" },
        ]);
        expect(filteredList(tools, "design")).toEqual([{ category: "design" }]);
    });
});
