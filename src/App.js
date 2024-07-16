import React from 'eact';
import { BrowserRouter, Route, Switch } from 'eact-router-dom';
import AllProducts from './components/AllProducts';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={AllProducts} />
        <Route path="/product/:id" component={ProductDetails} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
