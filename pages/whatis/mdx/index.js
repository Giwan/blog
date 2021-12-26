import Mdx from "../../../data/whatis/mdx.mdx";
import { whatisPageStyle } from "../../../styles/page.module.css";

export default function() {
    return(
        <div className={whatisPageStyle}>
            <Mdx />
        </div>
    )
}