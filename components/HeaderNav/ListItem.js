import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./headernav.module.css";

const getStyle = (router, styles, target) =>
    router.pathname === target ? styles.activeLink : "";

const ListItem = ({ name, target }) => (
    <li className={getStyle(useRouter(), styles, target)}>
        <Link href={target}>{name}</Link>
    </li>
);

export default ListItem;
