import Layout from "../components/Layout/Layout";
import "../node_modules/prismjs/themes/prism-okaidia.css";
import "../styles/globals.css";


const App = function ({ Component, pageProps }) {
    return (
        <Layout pageTitle="Mytoori Blog" description="Mytoori Blog">
            <Component {...pageProps} />
        </Layout>
    );
}

export default App;
