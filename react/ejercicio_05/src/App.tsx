import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './styles/App.scss';

import Header from './template/Header';
import Footer from './template/Footer';

import Inicio from './app-routes/Inicio';
import Pagina1 from './app-routes/Pagina1';
import Pagina2 from './app-routes/Pagina2';


function App() {
  return (
    <Router >
      <div className="app-content">

        <Header />

          <main>
          <Redirect exact from="/" to="/inicio" /> 
          <Route exact path="/inicio" component={Inicio} />
          <Route exact path="/pagina-1" component={Pagina1} />
          <Route exact path="/pagina-2" component={Pagina2} />

          </main>

        <Footer />

      </div>

    </Router>
  );
}

export default App;
