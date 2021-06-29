import React, { Component } from 'react';
import SessionComponent from './Components/SessionComponent';
import HomeComponent from './Components/HomeComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
  // constructor(props){
  //   super(props);
  // }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/session"><SessionComponent /></Route>
            <Route path="/" ><HomeComponent></HomeComponent></Route>

          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
