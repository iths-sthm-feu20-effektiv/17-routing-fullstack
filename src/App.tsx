// import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route, NavLink, Redirect } from 'react-router-dom'
import Products from './components/products/Products'
import Cart from './components/cart/Cart'
import Start from './components/start/Start'
import { CartItem } from './types/CartItem'
import './App.css';

const cartData: CartItem[] = []

function App() {
    return (
        <Router>
        <div className="App">
            <header className="App-header">
                <nav>
                    <Link to="/"> Start </Link>
                    <Link to="/productss"> Produkter (fel) </Link>
                    <NavLink to="/products" activeClassName="active"> Produkter </NavLink>
                    <NavLink to="/cart" activeClassName="active"> Kundvagn </NavLink>
                </nav>
            </header>

            <main>

            <Switch>
                <Route path="/products"> <Products /> </Route>
                <Route path="/productss">
                    <Redirect to="/products" />
                </Route>
                <Route path="/cart" render={() => <Cart items={cartData} />} />
                <Route path="/"> <Start /> </Route>
            </Switch>

            </main>
        </div>
        </Router>
    );
}

export default App;


// const Router = (props) => props.children
