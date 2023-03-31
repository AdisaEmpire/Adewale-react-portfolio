import './App.css';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Router>
        <div className='main'>
          <Sidebar />
          <Menu />
          <Switch>
            <Route exact path='/contact'>
              <Contact />
            </Route>

            <Route path='/projects'>
              <Projects />
            </Route>

            <Route path='/experience'>
              <Experience />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
    
  );
}

export default App;
