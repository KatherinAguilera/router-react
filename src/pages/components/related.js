import React from 'react';
import logo from '../../../images/logo.png';
import './related.css';
import { Link, NavLink } from 'react-router-dom';
const home= "Inicio"
const Related = props => (
  <nav className="Related">
    <NavLink exact to="/" activeClassName="is-selected">
      <img src={logo} />
    </NavLink>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="is-selected">
            {home}
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/videos" activeClassName="is-selected">
            Videos
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contacto" activeClassName="is-selected">
            Contacto
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/perfil" activeClassName="is-selected">
            Perfil
          </NavLink>
        </li>
      </ul>
    </nav>
  )

 export default Related;