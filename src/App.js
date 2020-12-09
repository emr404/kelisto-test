import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./pages/Header";
import Basket from "./pages/Basket";
import Products from "./pages/Products";
import { ProductProvider } from "./context/BasketContext";

function App() {
  return (
    <div className="App">
      <ProductProvider>
          <Router>
              <Header/>
              <Switch>
                  <Route path = '/' exact component={Products}/>
                  <Route path = '/Basket' component={Basket}/>
              </Switch>
          </Router>
      </ProductProvider>
    </div>
  );
}

export default App;
