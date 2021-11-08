import React, { useState } from 'react';
import { useHistory } from 'react-router';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header() {
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);
  const { push } = useHistory();
  return (
    <header>
      <button
        onClick={ () => push('/perfil') }
        type="button"
        data-testid="profile-top-btn"
      >
        <img src={ profileIcon } alt="Profile icon" />
      </button>
      <h1 data-testid="page-title">Título</h1>
      <button
        onClick={ () => setIsSearchBarActive(!isSearchBarActive) }
        type="button"
        data-testid="search-top-btn"
      >
        <img src={ searchIcon } alt="Search icon" />
      </button>
      {
        isSearchBarActive
          ? <input type="text" name="search-bar" id="search-bar" />
          : ''
      }
    </header>
  );
}
