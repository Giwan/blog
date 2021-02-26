import ListItem from "./ListItem";
import styles from "./headernav.module.css";

const headerNavData = [
    {
        name: "articles",
        target: {
            path: "/",
            routes: ["/blog"],
        },
    },
    {
        name: "tools",
        target: "/tools",
    },
    {
        name: "design",
        target: "/design",
    },
    {
        name: "about",
        target: "/about",
    },
];

const HeaderNav = () => (
    <nav className={styles.headerNav}>
        <ul>
            {headerNavData.map(({ name, target }) => (
                <ListItem key={name} name={name} target={target} />
            ))}
        </ul>
    </nav>
);

export default HeaderNav;
