import React from "react";
import ReactDom from "react-dom/client";

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

                </div>
            </div>
        </main>
    );
}

export default Main;