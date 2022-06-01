import React from "react";
import ReactDom from "react-dom/client";

const Logo = (props) => {
    return(
        <div className="d-flex align-items-center justify-content-between">
            <a className="logo d-flex align-items-center">
                <img src={props.img} alt="" />
                <span className="d-none d-lg-block">{props.text}</span>
            </a>
            <i className="bi bi-list toggle-sidebar-btn"></i>
        </div>  
    );
}

export default Logo;