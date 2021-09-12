
import './App.css';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom'

//Screens

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//Components
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
        <div className="app">
          {/* Navbar */}
          <Navbar />
          {/* SideDrawer */}
          {/* Backdrop */}
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
