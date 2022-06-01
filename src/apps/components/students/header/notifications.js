import React from "react";
import ReactDom from "react-dom/client";

const Notifications = () => {
    return (
        <>
            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <i className="bi bi-bell"></i>
                <span className="badge bg-primary badge-number">3</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                    Tienes 3 notificaciones nuevas sin leer
                </li>
                <li><hr className="dropdown-divider"/></li>
                
                <li className="notification-item">
                    <i className="bi bi-info-circle text-primary"></i>
                    <div>
                        <h4>Nueva tarea</h4>
                        <p>María de los Ángeles ha publicado una nueva tarea en Ing. Software </p>
                        <p>4 hrs. ago</p>
                    </div>
                </li>
            </ul>
        </>
    );
}

export default Notifications;