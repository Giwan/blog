const searchService = (function () {
    let _keyword, _results;

    return {
        find: async function (keyword) {
            if (keyword === _keyword && _results) {
                return _results;
            }

            keyword = keyword.trim();
            _keyword = keyword;
            try {
                const response = await fetch("/api/search?q=" + keyword);
                if (!response.ok) {
                    throw new Error(
                        `Failed to perform search for ${keyword}: ${response.status}`
                    );
                }
                _results = await response.json();
                return _results;
            } catch (e) {
                console.error(e);
            }
        },
    };
})();

export default searchService;
