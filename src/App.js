import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Header from './components/Header';
import { DrinkProvider } from './hooks/useDrinks';
import { LoginProvider } from './hooks/useLogin';
import { MealsProvider } from './hooks/useMeals';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import Perfil from './pages/Perfil';
import Explorar from './pages/Explorar';

function App() {
  return (
    <LoginProvider>
      <DrinkProvider>
        <MealsProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route path="/comidas" component={ Comidas } />
            <Route path="/bebidas" component={ Bebidas } />
            <Route exact path="/comidas/{id-da-receita}" />
            <Route exact path="/bebidas/{id-da-receita}" />
            <Route exact path="/explorar" component={ Explorar } />
            <Route exact path="/explorar/comidas" />
            <Route exact path="/explorar/bebidas" />
            <Route exact path="/explorar/comidas/ingredientes" />
            <Route exact path="/explorar/bebidas/ingredientes" />
            <Route exact path="/explorar/comidas/area" />
            <Route exact path="/perfil" component={ Perfil } />
            <Route exact path="/receitas-feitas" />
            <Route exact path="/receitas-favoritas" />
          </Switch>
        </MealsProvider>
      </DrinkProvider>
    </LoginProvider>
  );
}

export default App;
