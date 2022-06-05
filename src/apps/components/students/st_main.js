import React from "react";

import StTasks from "./myTasks/st_tasks";
import Books from "./main/books";
const Main = () => {
    return (
        <main className="main" id="main">
            <div className="pagetitle">
                <h1 id="pageTitle">Mis tareas</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">Home</li>
                        <li className="breadcrumb-item active" id="directory">Mis tareas</li>
                    </ol>
                </nav>
            </div>

            <div className="section dashboard">
                <div className="row"  id="Task" style={{display: "block"}}>
                    <StTasks student="190116389"/>
                </div>
                <div className="row"  id="Books" style={{display: "none"}}>
                    <Books />
                </div> 
            </div>
        </main>
    );
}

export default Main;