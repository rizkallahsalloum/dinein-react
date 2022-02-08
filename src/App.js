import React from 'react';
import { DataProvider } from './context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalStyles from './components/Globals/GlobalStyles';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Burgers from './pages/Burgers';
import Pizzas from './pages/Pizzas';
import Salads from './pages/Salads';
import Thankyou from './components/Form/Thankyou';
import CardsDetails from './components/CardsDetails';
import NotFoundPage from './pages/NotFoundPage';
class App extends React.Component {
  render() {
    return (
      <DataProvider>
        <Router>
          <GlobalStyles />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/thankyou" component={Thankyou} />

            <Route exact path="/burger" component={Burgers} />
            <Route exact path="/pizza" component={Pizzas} />
            <Route exact path="/salad" component={Salads} />
            <Route exact path="/:type/:slug" component={CardsDetails} />

            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </DataProvider>
    );
  }
}

export default App;
