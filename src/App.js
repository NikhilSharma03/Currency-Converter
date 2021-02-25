import React from 'react';
import { Route } from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import Home from './pages/Home/Home';
import Converter from './pages/Converter/Converter';

const App = () => {
  return (
    <React.Fragment>
      <Toolbar />
      <main>
        <Route path="/convert" component={Converter} />
        <Route path="/" exact component={Home} />
      </main>
    </React.Fragment>
  );
};

export default App;
