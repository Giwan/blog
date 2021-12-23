import SearchResultItem from "./SearchResultItem";
import { searchResultsList, searched, searchedWord } from "../../styles/searchResults.module.css";

const SearchResults = function ({ searchData }) {
    if (!searchData?.keyword) return null;
    return (
        <div>
            <p className={searched}>Results for: <span className={searchedWord}>{searchData?.keyword}</span></p>
            <ul className={searchResultsList}>
                {searchData?.results?.map((result) => (
                    <SearchResultItem key={result.id} {...{ result }} />
                ))}
            </ul>
        </div>
    );
};

export default SearchResults;