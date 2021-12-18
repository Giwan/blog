import ReactMDX from "../../../data/whatis/react.mdx";
import { whatisPageStyle } from "../../../styles/page.module.css";

export default function() {
    return(
        <div className={whatisPageStyle}>
            <ReactMDX />
        </div>
    )
}