import React from 'react';
import NavBar from "./component/NavBar";
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                <div>
                    <NavBar></NavBar>
                    <hr />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/about' component={About} />
                    </Switch>
                </div>
            </Router>

        </div>
    );
}

export default App;