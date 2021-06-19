import {FunctionComponent } from 'react';
import { NavLink  } from "react-router-dom";

const Navigation:FunctionComponent = () => {

    return (
        <>
        <nav>
            <ul>
                <li  className="nav-item">
                    <NavLink to="/inicio" activeClassName="active" className="nav-link"> INICIO </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/pagina-1" activeClassName="active" className="nav-link"> PAGINA 1 </NavLink>
                </li>
                <li  className="nav-item">
                    <NavLink to="/pagina-2" activeClassName="active" className="nav-link"> PAGINA 2 </NavLink>
                </li>
            </ul>
        </nav>
        </>
    );
}

export default Navigation;
