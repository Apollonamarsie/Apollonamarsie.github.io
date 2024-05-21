import './App.css'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Statistics from './components/Statistics';
import Colonisation from './components/Colonisation';
import Converter from './components/Converter';
import Planets from './components/Planets';
import Moons from './components/Moons';
import Gallery from './components/Gallery';
import Simulation from './components/Simulation';
import Form from './components/Form';
import Info from './components/Info';
import MainPage from './components/MainPage';

function App() {
  return (
    <main>
      <Router>
        <NavBar />
        <div>
          <Switch>
            <Route path="/statystyki">
              <Statistics />
            </Route>
            <Route path="/kolonizacja">
              <Colonisation />
            </Route>
            <Route path="/konwerter">
              <Converter />
            </Route>
            <Route path="/planety">
              <Planets />
            </Route>
            <Route path="/ksiezyce">
              <Moons />
            </Route>
            <Route path="/galeria">
              <Gallery />
            </Route>
            <Route path="/symulacja">
              <Simulation />
            </Route>
            <Route path="/formularz">
              <Form />
            </Route>
            <Route path="/info">
              <Info />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </main>
  )
}

export default App
