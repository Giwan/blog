import FrameworkMDX from "../../../data/whatis/framework.mdx";
import { whatisPageStyle } from "../../../styles/page.module.css";

export default function() {
    return(
        <div className={whatisPageStyle}>
            <FrameworkMDX />
        </div>
    )
}