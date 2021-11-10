import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

export default function Header({ title, isVisible }) {
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);
  const history = useHistory();

  return (
    <header className="header">
      <div className="header-menu">
        <button
          className="form-btn"
          onClick={ () => history.push('/perfil') }
          type="button"
          data-testid="profile-top-btn"
        >
          <img className="svg-color" src={ profileIcon } alt="Profile icon" />
        </button>
        <h1 data-testid="page-title">{title}</h1>
        <button
          className="form-btn"
          style={ { display: isVisible } }
          onClick={ () => setIsSearchBarActive(!isSearchBarActive) }
          type="button"
          data-testid="search-top-btn"
        >
          <img className="svg-color" src={ searchIcon } alt="Search icon" />
        </button>
      </div>
      {isSearchBarActive && <SearchBar />}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  isVisible: PropTypes.string.isRequired,
};
