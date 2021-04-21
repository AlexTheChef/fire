import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './Components/About';
import Error from "./Components/Error"
import Telo from './Components/Telo'


function Pocetna() {
    return (
        <div >
            <Router >
                <Switch>
                    <Route exact path="/"><Telo /></Route>
                    <Route exact path="/Home" component={Telo} />
                    <Route path="/about" component={About} />
                    <Route path="*"><Error /></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Pocetna