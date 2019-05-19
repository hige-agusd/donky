import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home/Home';
import Torneo from './containers/Torneo/Torneo';
import Academia from './containers/Academia/Academia';
import TorneoEdit from './containers/TorneoEdit/Torneo';
import Layout from './hoc/Layout/Layout';
import './assets/fonts/Donky_Fuente.ttf';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/fixture" component={Torneo} />
            <Route path="/academia" component={Academia} />
            <Route path="/admin" component={TorneoEdit} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
