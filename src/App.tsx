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
import { useEffect, useState } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";

const LOCAL_STORAGE_VISITS = 'visits-psa'

function App() {

  const [visits, setVisits] = useState<number>(0);
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [spendTime, setSpendTime] = useState<number>(0);

  const formatSpendTime = () => {
    const endDate = new Date();
    //@ts-ignore
    const diffInMs = Math.abs(endDate - startTime);
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const hours = Math.floor(diffInSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((diffInSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = (diffInSeconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  useEffect(() => {
    setStartTime(new Date());
    const intervalId = setInterval(() => {
      //@ts-ignore
      setSpendTime(formatSpendTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const saveToLocalStorage = (key: string, value: number) => {
    localStorage.setItem(key, JSON.stringify(value));
  }

  const readFromLocalStorage = (key: string) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  useEffect(() => {
    const oldVisits = Number(readFromLocalStorage(LOCAL_STORAGE_VISITS));
    const newVisits = oldVisits + 1;
    saveToLocalStorage(LOCAL_STORAGE_VISITS, newVisits);
    setVisits(newVisits);
  }, []);

  return (
    <PrimeReactProvider>
      <main>
        <Router>
          <NavBar />
          <div>
            <Switch>
              <Route path="/statystyki">
                <Statistics
                  visits={visits}
                  spendTime={spendTime}
                />
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
    </PrimeReactProvider>
  )
}

export default App
