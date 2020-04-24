import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Home from './components/Home'
import Pnf from './components/Pnf'
import Edit from './components/Edit'
import New from './components/New'
import './App.css';

class App extends React.Component{
  render(){
    return(
      <Router>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand"><em>APICRUD</em></Link>
              <button className="navbar-toggle" data-toggle="collapse" data-target="#myDiv"> 
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>

            <div className="navbar-collapse collapse" id="myDiv">
              <ul className="nav navbar-nav">
                <li><Link to="/"><em>Home</em></Link></li>
                <li><Link to="/new"><em>New</em></Link></li>
                
              </ul>
            </div>
          </div>
        </nav>


        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/edit/:_id"  component={Edit} />
          <Route exact path="/new"  component={New} />
          <Route exact path="**" component={Pnf}/>
        </Switch>
      </Router>
    )
  }
}



export default App;
