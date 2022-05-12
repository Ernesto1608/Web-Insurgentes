import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavBar from './Components/nav';
import Home from './Components/home'
import Bio from './Components/biografia'
import Footer from './Components/footer'
import Conciertos from './Components/Conciertos';
import Albums from './Components/Albums';


function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <NavBar />
            <Home/>
            <Bio/>
            <Footer/>
          </Route>
          <Route path="/conciertos">
            <Conciertos/>
          </Route>
          <Route path="/albums">
            <Albums/>
          </Route>
        </Switch>
    </Router>    
  );
}

export default App;
