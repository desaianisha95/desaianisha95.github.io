import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/CustomNavbar';
import About from './pages/About/About'
import Education from './pages/Education/Education'
import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
import Portfolio from './pages/Portfolio/Portfolio';




function App() {
  return (
<div>   
      <Router>

        <CustomNavbar />
        <Switch>
            <Route exact path='/portfolio' component={Portfolio}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/education' component={Education} />
            <Route exact path='/skills' component={Skills} />
            <Route exact path='/projects' component={Projects} />
            </Switch>
      </Router>
     

</div>  
  
  );
}










export default App;
