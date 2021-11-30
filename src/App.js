import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';
import About from './Pages/About/About';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Navigation></Navigation>
            <Home></Home>
          </Route>
          <Route  path='/home'>
            <Navigation></Navigation>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <Navigation></Navigation>
            <About></About>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
