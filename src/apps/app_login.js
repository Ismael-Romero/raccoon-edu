import React, {useState} from "react";
import ReactDom from "react-dom/client";
import axios from "axios";
const App = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const accessMatch = (data) => {
        if (data.status === 1){
            message(["none", "none", "none"]);
            document.getElementById("auxControl").textContent = data.rol;

        } else {
            message(["none", "block", "none"]);
            document.getElementById("auxControl").textContent = "x";

        }
    }

    //Event in charge of calling validations and requests to the server.
    const handleSubmit = (ev) => {
        ev.preventDefault();
        
        if (password.length > 0){
            axios.post(`http://127.0.0.1:3000/login/${email}/${password}`)
            .then((response) => accessMatch(response.data))
            .catch((error) => error);

        } else {
            message(["none", "none", "block"]);
            
        }
    }

    const message = (arr) => {
        document.getElementById("errorNet").style.display = arr[0];
        document.getElementById('userUnknown').style.display = arr[1];
        document.getElementById('userInvalid').style.display = arr[2];
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
                        id="box-user"
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
                        id="box-pass"
                />
            </div>
            <button type="submit" className="btn btn-theme" id="btnLogin">Iniciar sesión</button>
        </form>     
    );
}

export default App;