import React from 'react';

export default function Header() {
  return (
    <header>
      <button type="button" data-testid="profile-top-btn">
        <img src="../images/profileIcon.svg" alt="Profile icon" />
      </button>
      <h1 data-testid="page-title">Título</h1>
      <button type="button" data-testid="search-top-btn">
        <img src="../images/searchIcon.svg" alt="Search icon" />
      </button>
    </header>
  );
}
