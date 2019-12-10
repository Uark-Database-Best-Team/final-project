import React from 'react';
import Header from './header/Header'
import Home from './home/Home';
import Employees from './employees/Employee';
import Books from './books/Books';
import Users from './users/Users';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {

  render (){
    return(
    <div className="App">
      <header className="App-header">
        <Router>
        <Header/>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/books' component={Books} />
              <Route path='/users' component={Users} />
              <Route path='/employees' component={Employees} />
          </Switch>
      </Router>
      </header>
    </div>
    );
  }
}

export default App;
