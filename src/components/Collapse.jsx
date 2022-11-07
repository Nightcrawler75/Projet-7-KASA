import { useState } from "react";
import "../styles/Collapse.css";
import collapseOpen from "../assets/collapse-open.svg"
import collapseClosed from "../assets/collapse-closed.svg"

const Collapse = ({title, children}) => {
    const [collapsed, setCollapsed] = useState(true); 
    return ( 
        <> 
            <div className="collapse">
                <p className="collapseTitle">{title}</p>
                <button className="collapseButton" onClick ={() => setCollapsed(!collapsed)} > <img alt="collapseBtn" src={collapsed ? collapseClosed : collapseOpen} /> </button>
            </div>
            <div className={collapsed && "collapsed"}>
                    <p className="collapseTxt">{children}</p>
                
            </div>
        </>
    );
}
 
export default Collapse;