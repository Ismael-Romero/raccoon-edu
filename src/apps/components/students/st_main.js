import React from "react";

import StTasks from "./myTasks/st_tasks";

const Main = () => {
    return (
        <main className="main" id="main">
            <div className="pagetitle">
                <h1>Dashboard</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">Home</li>
                        <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                </nav>
            </div>

            <div className="section dashboard">
                <div className="row">
                    <StTasks student="190116389"/>
                </div>
            </div>
        </main>
    );
}

export default Main;