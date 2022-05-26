import React, {useState} from "react";
import './Admin.css';
import nombre from "../imagenes/logotipo_insurgentes-05.png"
import logout from "../imagenes/logout.png";
import AdminList from "./AdminList";
import CreateRecord from "./CreateRecord";
import { decrypt } from '../Utils/crypto';


function Admin() {
    const [mode, setMode] = useState("events");
    const [token, setToken] =useState(localStorage.getItem("token") || undefined);
    const [showCreate, setShowCreate] = useState(false);

    const pass = "U2FsdGVkX19XprvMYrYutBiMrdqAg2z6tStrla+BpnvU7zscYj1E7kjiyuyUoSKJ";

    const handleChangeMode = (mode) => {
        setMode(mode);
    };

    const logOut = () => {
        localStorage.removeItem("token");
        setToken(undefined);
    }

    const logIn = (password) => {
        console.log(password);
        console.log(decrypt(pass));
        if (decrypt(pass) == password) {
            localStorage.setItem("token", password);
            setToken(password);
        }
    } 

    return (
        <div className="admin">
            <nav class="navbar">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/home" target="blank">
                    <h4 class="h4">Administrador</h4>
                    <img src={nombre} alt="logo" width="150" height="auto" class="d-inline-block align-text-top"></img></a>
                    {token == decrypt(pass) && <a  href="#" onClick={(e) => {handleChangeMode("events")}}>Eventos</a>}
                    {token == decrypt(pass) && <a  href="#" onClick={(e) => {handleChangeMode("albums")}}>Albums</a>}
                    <div className="login">
                        {token != decrypt(pass) && <input type={"password"} placeholder={"password"} onChange={(e) => logIn(e.target.value)}></input>}
                        {token == decrypt(pass) && <a class="navbar-brand" href="#" onClick={(e) => {logOut()}}><img src={logout} alt="logo" width="60" height="auto" class="d-inline-block align-text-top"></img></a>}
                    </div>
                </div>
            </nav>
            {token == decrypt(pass) && <AdminList mode={mode} change={false}/>}
            {token == decrypt(pass) && mode == "events" && <div style={{"textAlign":"end", "marginTop":"10px"}}>
                <a href="#" onClick={(e) => {{setShowCreate(!showCreate)}}}><img src="https://cdn3.iconfinder.com/data/icons/eightyshades/512/14_Add-512.png" alt="logo" width="60" height="auto"></img></a>
            </div>}
            <CreateRecord 
                showCreate={showCreate}
                setShowCreate={setShowCreate}
            />
        </div>
    );
}

export default Admin;