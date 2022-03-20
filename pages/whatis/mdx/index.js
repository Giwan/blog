import Mdx from "../../../data/whatis/mdx.mdx";
import { whatisPageStyle } from "../../../styles/page.module.css";

const MdxIndex = function() {
    return(
        <div className={whatisPageStyle}>
            <Mdx />
        </div>
    )
}

export default MdxIndex;