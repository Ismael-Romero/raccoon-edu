import React, {useState} from "react";
import ReactDom from "react-dom/client";

const App = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Event in charge of calling validations and requests to the server.
    const handleSubmit = (ev) => {
        ev.preventDefault();
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="box-email">Correo electrónico: </label>
                <input  type="email" 
                        className="form-control" 
                        autoComplete="off"
                        name="email"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}
                />
            </div>
            <div className="form-group mb-5">
                <label htmlFor="box-pass">Contraseña: </label>
                <input  type="password" 
                        className="form-control"
                        autoComplete="off"
                        name="password"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-theme" ><a Style="color: white; text-decoration: none;" href="./index.html">Iniciar sesión</a></button>
        </form>     
    );
}


export default App;