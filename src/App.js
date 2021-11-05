import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/comidas" component={ comidas } />
        <Route path="/bebidas" component={ Bebidas } />
        <Route exact path="/comidas/{id-da-receita}" />
        <Route exact path="/bebidas/{id-da-receita}" />
        <Route exact path="/explorar" />
        <Route exact path="/explorar/comidas" />
        <Route exact path="/explorar/bebidas" />
        <Route exact path="/explorar/comidas/ingredientes" />
        <Route exact path="/explorar/bebidas/ingredientes" />
        <Route exact path="/explorar/comidas/area" />
        <Route exact path="/perfil" />
        <Route exact path="/receitas-feitas" />
        <Route exact path="/receitas-favoritas" />
      </Switch>
    </Provider>
  );
}

export default App;
