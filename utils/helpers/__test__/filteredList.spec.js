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
        const tools = [{ labels: ["design"] }];
        expect(filteredList(tools, ["design"])).toEqual(tools);
        tools.push({labels: ["writing"]});
        expect(filteredList(tools, ["design"])).toEqual([tools[0]]);
        tools.push({labels: ["productivity"]});
        expect(filteredList(tools, ["design", "writing"])).toEqual([tools[0], tools[1]]);
        expect(filteredList(tools, ["design", "writing"])).not.toContain(tools[2]);
    });
});
