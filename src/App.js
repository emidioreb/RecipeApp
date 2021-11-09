import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';

import { DrinkProvider } from './hooks/useDrinks';
import { LoginProvider } from './hooks/useLogin';
import { MealsProvider } from './hooks/useMeals';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import Perfil from './pages/Perfil';
import Explorar from './pages/Explorar';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarBebidas from './pages/ExplorarBebidas';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ReceitasFavoritas from './pages/ReceitasFavoritas';
import ExplorarIngredientes from './pages/ExplorarIngredientes';
import Area from './pages/Area';
import Detalhes from './pages/Detalhes';
import Processo from './pages/Processo';

function App() {
  return (
    <LoginProvider>
      <DrinkProvider>
        <MealsProvider>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/comidas" component={ Comidas } />
            <Route exact path="/bebidas" component={ Bebidas } />
            <Route exact path="/comidas/:id-da-receita" component={ Detalhes } />
            <Route exact path="/bebidas/:id-da-receita" component={ Detalhes } />
            <Route path="/comidas/:id-da-receita/in-progress" component={ Processo } />
            <Route path="/bebidas/:id-da-receita/in-progress" component={ Processo } />
            <Route exact path="/explorar" component={ Explorar } />
            <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
            <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
            <Route
              path="/explorar/comidas/ingredientes"
              component={ ExplorarIngredientes }
            />
            <Route
              path="/explorar/bebidas/ingredientes"
              component={ ExplorarIngredientes }
            />
            <Route path="/explorar/comidas/area" component={ Area } />
            <Route path="/perfil" component={ Perfil } />
            <Route path="/receitas-feitas" component={ ReceitasFeitas } />
            <Route path="/receitas-favoritas" component={ ReceitasFavoritas } />
          </Switch>
        </MealsProvider>
      </DrinkProvider>
    </LoginProvider>
  );
}

export default App;
