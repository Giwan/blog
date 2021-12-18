import Layout from "../components/Layout/Layout";
import "../node_modules/prismjs/themes/prism-okaidia.css";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => (
    <Layout pageTitle={pageProps.pageTitle} description={pageProps.description}>
        <Component {...pageProps} />
    </Layout>
);

export default App;
