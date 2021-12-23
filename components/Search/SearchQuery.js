import { searchQueryStyle, searchQueryInput, searchQueryButton } from "../../styles/searchQuery.module.css";

const SearchQuery = function({handleSearch}) {
    return (
        <form onSubmit={handleSearch} className={searchQueryStyle}>
            <input type="search" name="q" className={searchQueryInput} />
            <button className={searchQueryButton}>Search</button>
        </form>
    )
}

export default SearchQuery;