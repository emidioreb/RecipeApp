import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import rockGlass from '../images/rockGlass.svg';

export default function Landing() {
  return (
    <div className="meals">
      <span className="logo">Grupo 4</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
      <Link to="/bebidas">
        <button type="button">Bebidas</button>
      </Link>
      <Link to="/comidas">
        <button type="button">Comidas</button>
      </Link>
    </div>
  );
}
