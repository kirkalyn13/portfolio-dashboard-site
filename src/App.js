import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Insights from './routes/Insights'
import About from './routes/About'
import Projects from './routes/Projects'

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar logo={"header_logo.png"}/>
        <div className="container" >
            <Switch>
              <Route exact path="/">
                <About />
              </Route>
              <Route path="/insights">
                <Insights/>
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
            </Switch>
          </div> 
        <Footer />
    </div>
    </Router>
  );
}

export default App;
