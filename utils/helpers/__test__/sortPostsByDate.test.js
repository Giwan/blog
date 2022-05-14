import { sortPostsByDate } from "../sortPostsByDate";

describe("sort posts by date", () => {
    it("should sort the posts", () => {
        expect(() => sortPostsByDate()()).toThrowErrorMatchingSnapshot();
        const post1 = {
            module: {
                meta: {
                    published: "10-10-1980"
                }
            }
        }
        const post2 = {
            module: {
                meta: {
                    published: "12-10-1980"
                }
            }
        }
        expect(() => sortPostsByDate("createdDate")(post1, post2)).toThrowErrorMatchingSnapshot();
        expect(sortPostsByDate("published")(post1, post2)).toBe(2000000);
    });
});
