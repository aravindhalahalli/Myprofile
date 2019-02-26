import React from 'react';
import {Switch,Route} from 'react-router-dom';

import LandingPage from './Landingpage';
import About from './About';
import Contactus from './Contactus';
import Project from './Project';
import Resume from './Resume';


const Main = () =>(
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/About" component={About} />
        <Route  path="/Contactus" component={Contactus} />
        <Route  path="/Project" component={Project} />
        <Route  path="/Resume" component={Resume} />        
    </Switch>
)


export default Main;