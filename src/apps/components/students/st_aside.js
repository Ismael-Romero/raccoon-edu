import React from "react";
import ReactDom from "react-dom/client";

const Aside = () => {
    
    const items = [
        {id: "itemMyClass", text: "Mis clases"},
        {id: "itemStudyRoom", text: "Salas de estudio"},
        {id: "itemReg", text: "Inscripciones"},
        {id: "itemMyTask", text: "Mis tareas"},
        {id: "itemBooks", text: "Biblioteca"},

    ];

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