import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./headernav.module.css";
import { getStyle } from "../../utils/helpers";

const ListItem = ({ name, target }) => (
    <li className={getStyle(useRouter(), styles, target)}>
        <Link href={{pathname: typeof target === "object" ? target.path : target}} prefetch={false}>
            <a alt={name}>{name}</a>
        </Link>
    </li>
);

export default ListItem;
