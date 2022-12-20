# How does search work in the blog?

When ever I create a new post the module `populateSearchData` should be executed. This creates a "cache" file that can be used for searching.
This can also be manually triggered with this script in package.json `"populateSearchData": "node populateSearchData.js"`

## Populate search data

All of the content in `pages/blog` is read into an array which contains an object:

```js
// populateSearchData.js

const posts = fileNames.map((fileName) => ({
    id: fileName,
    title: fileName,
}));
```

That returned array of objects is stringified and stored such that it can be imported as an array object later.
The generated cache can be found at `./cache/searchData.js`.

## Search API

The search api in `pages/api/search` takes the search keyword and looks through the article titles to find the articles that match the keyword.
The results are then sent back to the client.

```js
// pages/api/search.js

import { posts } from "../../cache/searchData";

const Search = function (request, response) {
    const results = request.query.q
        ? posts.filter((post) =>
              post.title.toLowerCase().includes(request.query.q)
          )
        : [];

    response.statusCode = 200;
    response.setHeader("Content-Type", "Application/json");

    response.end(JSON.stringify({ results }));
};

export default Search;
```
