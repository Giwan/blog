import Nextjs from "../../../data/whatis/nextjs.mdx";
import { whatisPageStyle } from "../../../styles/page.module.css";

const NextJsIndex = function() {
    return(
        <div className={whatisPageStyle}>
            <Nextjs />
        </div>
    )
}

export default NextJsIndex;