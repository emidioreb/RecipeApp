import React from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin';
import Header from '../components/Header';

export default function Perfil() {
  const { mail } = useLogin();

  function clearLocalStorage() {
    localStorage.clear();
  }

  return (
    <div>
      <Header title="Perfil" isVisible="none" />
      <h3 data-testid="profile-email">{mail}</h3>
      <Link to="/receitas-feitas">
        <button type="button" data-testid="profile-done-btn">
          Receitas Feitas
        </button>
      </Link>
      <Link to="/receitas-favoritas">
        <button type="button" data-testid="profile-favorite-btn">
          Receitas Favoritas
        </button>
      </Link>
      <Link to="/">
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => clearLocalStorage() }
        >
          Sair
        </button>
      </Link>
    </div>
  );
}
