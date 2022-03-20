import ReactMDX from "../../../data/whatis/react.mdx";
import { whatisPageStyle } from "../../../styles/page.module.css";

const WhatIsIndex =  function() {
    return(
        <div className={whatisPageStyle}>
            <ReactMDX />
        </div>
    )
}

export default WhatIsIndex;