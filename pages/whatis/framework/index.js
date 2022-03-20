import FrameworkMDX from "../../../data/whatis/framework.mdx";
import { whatisPageStyle } from "../../../styles/page.module.css";

const FrameworkIndex = function() {
    return(
        <div className={whatisPageStyle}>
            <FrameworkMDX />
        </div>
    )
}

export default FrameworkIndex;