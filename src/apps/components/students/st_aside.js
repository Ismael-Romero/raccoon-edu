import React from "react";
import ReactDom from "react-dom/client";

const Aside = () => {
    
    const items = [
        // {id: "itemMyClass", text: "Mis clases"},
        // {id: "itemStudyRoom", text: "Salas de estudio"},
        // {id: "itemReg", text: "Inscripciones"},
        {id: "itemMyTask", text: "Mis tareas"},
        {id: "itemBooks", text: "Biblioteca"},

    ];

    const hiddenComponent = (name) => {
        switch(name){
            // case "itemDash":
            //     showComponent([1,0,0,0], "Dashboard");
            //     break;
            case "itemMyTask":
                showComponent([1,0], "Mis tareas");
                break;  
            case "itemBooks":
                showComponent([0,1], "Biblioteca");
                break;  
                
            default: null;
        }
    };

    const showComponent = (status, directory) => {
        document.getElementById('Task').style.display = (status[0]) ? "block" : "none";
        document.getElementById('Books').style.display = (status[1]) ? "block" : "none";
        document.getElementById('pageTitle').textContent = directory;
        document.getElementById('directory').textContent = directory;

    }

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
                    <a className="nav-link collapsed" id={item.id} onClick={() => hiddenComponent(item.id)}>
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