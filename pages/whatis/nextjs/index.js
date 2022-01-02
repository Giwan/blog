import Nextjs from "../../../data/whatis/nextjs.mdx";
import { whatisPageStyle } from "../../../styles/page.module.css";

export default function() {
    return(
        <div className={whatisPageStyle}>
            <Nextjs />
        </div>
    )
}