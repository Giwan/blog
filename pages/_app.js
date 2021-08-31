import Layout from "../components/Layout/Layout";
import "../node_modules/prismjs/themes/prism-okaidia.css";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => (
        <Layout pageTitle="Mytoori Blog" description="Mytoori Blog">
            <Component {...pageProps} />
        </Layout>
    );

export default App;
