import React from 'react';
// import { Link } from 'react-router-dom';
import Form from '../components/Form';
import '../App.css';
import rockGlass from '../images/rockGlass.svg';

export default function Landing() {
  return (
    <div className="meals">
      <span className="logo">Grupo 4</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
      <div className="btn-container">
        <Form />
        {/* <Link to="/bebidas">
          <button className="btn" type="button">
            Bebidas
          </button>
        </Link>
        <Link to="/comidas">
          <button className="btn" type="button">Comidas</button>
        </Link> */}
      </div>
    </div>
  );
}
