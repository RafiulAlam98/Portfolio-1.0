import { BrowserRouter,Switch,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Projects from './Pages/Projects/Projects';



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

          <Route path='/blogs'>
            <Navigation></Navigation>
           <Blogs></Blogs>
          </Route>

          <Route path='/projects'>
            <Navigation></Navigation>
            <Projects></Projects>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
