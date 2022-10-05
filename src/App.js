import { Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import Cart from './components/Cart';
import Home from './components/Home';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header />
      <div>
        <Route path='/' exact >
          <Home />
        </Route>
        <Route path='/cart' exact >
          <Cart />
        </Route>
      </div>
    </Fragment>
  );
}

export default App;
