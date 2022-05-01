import Remix from "../../../data/whatis/remix.mdx";
import { whatisPageStyle } from "../../../styles/page.module.css";

const RemixIndex = function() {
    return(
        <div className={whatisPageStyle}>
            <Remix />
        </div>
    )
}

export default RemixIndex;