import { getStyle } from "../../utils/helpers";

describe("getStyle", () => {
    const styles = {
        activeLink: "activeLink",
    };
    it("should throw an error if no params are provided", () => {
        const router = {
            pathname: "/",
        };
        expect(() => getStyle()).toThrowError(
            "Please provide a valid router object with pathname"
        );
    });

    it("should return the activeLink style if the path matches", () => {
        let router = {
            pathname: "/",
        };

        let target = "/";

        expect(getStyle(router, styles, target)).toEqual(styles.activeLink);
        target = "/tools";
        expect(getStyle(router, styles, target)).toBeUndefined();
        router.pathname = "/tools";
        expect(getStyle(router, styles, target)).toEqual(styles.activeLink);

        target = "/design";
        expect(getStyle(router, styles, target)).toBeUndefined();
        router.pathname = "/design";
        expect(getStyle(router, styles, target)).toEqual(styles.activeLink);

        target = "/about";
        expect(getStyle(router, styles, target)).toBeUndefined();
        router.pathname = "/about";
        expect(getStyle(router, styles, target)).toEqual(styles.activeLink);
    });

    it("should support target as an object", () => {
        let target = {
            path: "/blog",
        };

        const router = {
            pathname: "/blog",
        };

        expect(getStyle(router, styles, target)).toEqual(styles.activeLink);
    });

    it("should not return multiple activeLinks", () => {
        const routes = [
            {
                path: "/",
                routes: ["/blog"],
            },
            "/tools",
        ];

        const router = {
            pathname: "/tools",
        };

        const result = routes.map((route) => getStyle(router, styles, route));
        expect(result).not.toEqual([styles.activeLink, styles.activeLink]);
        expect(result).toEqual([undefined, styles.activeLink]);
    });
});
