import Link from "next/link";

const SearchResults = function ({ searchData }) {
    if (!searchData?.keyword) return null;
    return (
        <div>
            <h1>Searched: {searchData?.keyword}</h1>
            <ul>
                {searchData?.results?.map((result) => (
                    <SearchResultItem key={result.id} {...{ result }} />
                ))}
            </ul>
        </div>
    );
};

export default SearchResults;

const SearchResultItem = function ({ result }) {
    return (
        <li key={result.id}>
            <Link href={`/blog/${result.title}`} alt={result.title}>
                {result.title}
            </Link>
        </li>
    );
};
