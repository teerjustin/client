import './App.css';
import Main from './components/Main';
import Create from './components/Create';
import Update from './components/Update';
import ViewOne from './components/ViewOne';
import {Router, Redirect, Link} from "@reach/router";

function App() {
  return (
    <div className="App">
      <Link to="/"> Home |</Link> <Link to="/products/new"> Create</Link>

      <Router>
        <Redirect from="/" to="/products" noThrow ="true"/>
        <ViewOne path="products/:id" />
        <Update path="/products/update/:id" />
        <Main path="/products"/>
        <Create path="/products/new"/>
        

      </Router>
    </div>
  );
}

export default App;
