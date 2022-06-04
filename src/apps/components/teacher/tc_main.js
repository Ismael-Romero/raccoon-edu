import React from "react";

import FormTask from "./main/tasks";
import TableTasks from "./main/table_tasks";

const Main = () => {

    return (
        <main className="main" id="main">
            <div className="pagetitle">
                <h1 id="pageTitle">Dashboard</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">Home</li>
                        <li className="breadcrumb-item active" id="directory">Dashboard</li>
                    </ol>
                </nav>
            </div>

            <div className="section dashboard">
                <div className="row" id="dash" style={{display: "none"}}>
                    Soy dashboard
                </div>

                <div className="row" id="addTask" style={{display: "block"}}>
                    <FormTask teach="000000000"/>
                    <TableTasks teach="000000000" />
                </div>

                <div className="row" id="newMeet" style={{display: "none"}}>
                    Soy Videollamada
                </div>

                <div className="row" id="myStudents" style={{display: "none"}}>
                    Soy alumno
                </div>
            </div>
        </main>
    );
}

export default Main;