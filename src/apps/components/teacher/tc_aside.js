import React from "react";
import ReactDom from "react-dom/client";

const Aside = () => {

    const items = [
        {id: "itemTask", text: "Crear tarea"},
        // {id: "itemScore", text: "Calificar tareas"},
        ];

    const hiddenComponent = (name) => {
        switch(name){
            // case "itemDash":
            //     showComponent([1,0,0,0], "Dashboard");
            //     break;
            case "itemTask":
                showComponent([0,1,0,0], "Crear tarea");
                break;  
            case "itemScore":
                showComponent([0,0,1,0], "Calificar tareas");
                break;  
                
            default: null;
        }
    };

    const showComponent = (status, directory) => {
        document.getElementById('dash').style.display = (status[0]) ? "block" : "none";
        document.getElementById('addTask').style.display = (status[1]) ? "block" : "none";
        document.getElementById('Score').style.display = (status[2]) ? "block" : "none";
        document.getElementById('pageTitle').textContent = directory;
        document.getElementById('directory').textContent = directory;

    }

    return (
        <aside id="sidebar" className="sidebar">
            <ul id="sidebar-nav" className="sidebar-nav">
                <li className="nav-item">
                    <a className="nav-link" onClick={() => hiddenComponent("itemDash")}>
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