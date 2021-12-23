import Link from "next/link";
import {resultItem} from "../../styles/resultItem.module.css";

const SearchResultItem = function ({ result }) {
    return (
        <li key={result.id} className={resultItem}>
            <Link href={`/blog/${result.title}`} alt={result.title}>
                {result.title}
            </Link>
        </li>
    );
};

export default SearchResultItem;