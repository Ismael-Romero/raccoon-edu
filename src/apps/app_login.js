import React  from "react";
import ReactDom from "react-dom/client";

const App = () => {
    return (
        <div id="main-wrapper" className="container">
            <div className="row justify-content-center">
                <div className="col-xl-10">
                    <div className="card border-0 mt-5">
                        <div className="card-body p-0">
                            <div className="row no-gutters">
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="mb-5">
                                            <h3 className="h4 font-weight-bold text-theme">Raccoon EDU</h3>
                                        </div>

                                        <h6 className="h5 mb-0">Hola, </h6>
                                        <h4 className="h5 mb-0">Bienvenido</h4>
                                        <br />
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Email address</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" />
                                            </div>
                                            <div className="form-group mb-5">
                                                <label htmlFor="exampleInputPassword1">Password</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" />
                                            </div>
                                            <button type="submit" className="btn btn-theme">Login</button>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-lg-6 d-none d-lg-inline-block">
                                    <div className="account-block rounded-right">
                                        <div className="rounded-right"></div>
                                        <div className="account-testimonial">
                                            <p className="lead text-white mt-2 mb-5">
                                                Nunca consideres el estudio como una obligación, sino como una 
                                                oportunidad para penetrar en el bello y maravilloso mundo del saber.
                                                <br />-- Albert Einstein.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;