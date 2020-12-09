import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./pages/Header";
import Basket from "./pages/Basket";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <Switch>
                <Route path = '/' exact component={Products}/>
                <Route path = '/Basket' component={Basket}/>
            </Switch>
      </Router>
    </div>
  );
}

export default App;
