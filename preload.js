const { ipcRenderer } = require('electron')

let btnLogin;
let aux;

window.onload = function() { 
  btnLogin = document.getElementById("btnLogin");

  btnLogin.onclick = function(){
    setTimeout(() => {
        aux = document.getElementById("auxControl").textContent;
        switch (aux){
            case "":
                document.getElementById("errorNet").style.display = "block";
                break;
            case "x":
                break;
            default:
                ipcRenderer.invoke('login', aux);
                aux = "";
        }
    }, 2000);
  }
}