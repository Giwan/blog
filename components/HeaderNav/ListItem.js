import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./headernav.module.css";
import { getStyle } from "../../utils/helpers";

const ListItem = ({ name, target }) => (
    <li className={getStyle(useRouter(), styles, target)}>
        <Link href={typeof target === "object" ? target.path : target}>
            {name}
        </Link>
    </li>
);

export default ListItem;
