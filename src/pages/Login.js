import React from 'react';
import Form from '../components/Form';
import '../App.css';
import rockGlass from '../images/rockGlass.svg';
import { setupLocalStorage } from '../localStorage';

export default function Login() {
  setupLocalStorage();
  return (
    <div className="meals">
      <span className="logo">Grupo 4</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
      <div className="btn-container">
        <Form />
      </div>
    </div>
  );
}
