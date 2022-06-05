import React from "react";
import ReactDom from "react-dom/client";

const Profile = () => {
    return (
        <>
            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle"/>
                <span className="d-none d-md-block dropdown-toggle ps-2">Juan Carlos</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                    <h6> Juan Carlos </h6>
                    <span> Alumno </span>
                </li>
                <li><hr className="dropdown-divider"/></li>
                <li>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <i className="bi bi-person"></i>
                        <span>Mi perfil</span>
                    </a>
                </li>
                <li><hr className="dropdown-divider"/></li>    
                <li>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <i className="bi bi-box-arrow-right"></i>
                        <span>Cerrar Sesión </span>
                    </a>
                </li>
            </ul>
                    
        </>
    );
}

export default Profile;