import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DLSpeed from './components/DLSpeed'
import Latency from './components/Latency'
import OpenSignal from './components/OpenSignal'
import Users from './components/Users'
import About from './components/About'
import Products from './components/Products'

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
              <Route path="/dlspeed">
                <DLSpeed title={"2020 Download Speed Trend"} />
              </Route>
              <Route path="/latency">
                <Latency title={"2020 Latency Trend"} />
              </Route>
              <Route path="/subscribers">
                <Users title={"Subscriber Distribution"} />
              </Route>
              <Route path="/awards">
                <OpenSignal title={"Open Signal Awards"} />
              </Route>
              <Route path="/products">
                <Products />
              </Route>
            </Switch>
          </div> 
        <Footer />
    </div>
    </Router>
  );
}

export default App;
