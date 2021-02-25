import Layout from "../components/Layout";
import "../node_modules/prismjs/themes/prism-okaidia.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <Layout pageTitle="Mytoori Blog" description="Mytoori Blog">
            <Component {...pageProps} />
        </Layout>
    );
}
