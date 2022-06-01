import React from "react";
import ReactDom from "react-dom/client";

const Aside = () => {
    
    const items = [
        {id: "itemTask", text: "Crear tara"},
        {id: "itemClass", text: "Programar clase"},
        {id: "itemStudents", text: "Mis alumnos"}];

    return (
        <aside id="sidebar" className="sidebar">
            <ul id="sidebar-nav" className="sidebar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="bi bi-grid"></i>
                        <span>Dasboard</span>
                    </a>
                </li>
                <li className="nav-heading"> Contenido </li>
                {items.map( item => 
                <li className="nav-item" key={item.id}>
                    <a className="nav-link collapsed" id={item.id}>
                        <i className="bi bi-grid"></i>
                        <span> {item.text} </span>
                    </a>
                </li>           
                )}


            </ul>
        </aside>
    );
}

export default Aside;