
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom'

//Screens

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import Sidebar from './components/Sidebar';


function App() {

  const [sideToggle,setSideToggle] = useState(false);

  return (
    <Router>
        <div className="app">
          {/* Navbar */}
          <Navbar click={ () =>
          {
            setSideToggle(true)
          }}/>
          <Sidebar show={sideToggle} click = { () =>
          {
            setSideToggle(false)
          } } />
          {/* SideDrawer */}
          <Backdrop show={sideToggle}  click = { () =>
          {
            setSideToggle(false)
          }}/>
          
          <main>
            <Switch>
              <Route exact path="/" component={HomeScreen}>

              </Route>
              <Route exact path="/product/:id" component={ProductScreen}>
                
              </Route>
              <Route exact path="/cart" component={CartScreen}>
                
              </Route>
            </Switch>
          </main>

        </div>
    </Router>
    
  );
}

export default App;
