import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home/Home';
import Torneo from '../Torneo/Torneo';
import Academia from '../Academia/Academia';
import TorneoEdit from '../TorneoEdit/Torneo';
import Layout from '../../hoc/Layout/Layout';
import '../../assets/fonts/Donky_Fuente.ttf';
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
