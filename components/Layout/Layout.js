import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./layout.module.css";

const Layout = ({ children, pageTitle, description }) => (
    <div className={styles.layoutContainer}>
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />
            <meta name="Description" content={description}></meta>
            <title>{pageTitle}</title>
        </Head>
        <Header />
            <main className={styles.mainContent}>{children}</main>
            <Footer />
    </div>
);

export default Layout;
