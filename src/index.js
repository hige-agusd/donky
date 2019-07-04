import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

import './index.css';
import App from './containers/App/App';
import Firebase, { FirebaseContext } from './containers/Firebase';

import * as serviceWorker from './serviceWorker';

import torneos from './store/reducers/torneos';
import equipos from './store/reducers/equipos';
import jugadoras from './store/reducers/jugadoras';
import stats from './store/reducers/stats';
import staff from './store/reducers/staff';
import ig from './store/reducers/ig';
import auth from './store/reducers/auth';

library.add(faInstagram, faFacebookF);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    torneos: torneos,
    equipos: equipos,
    jugadoras: jugadoras,
    stats: stats,
    staff: staff,
    ig: ig,
    auth: auth
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <FirebaseContext.Provider value={new Firebase()}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </FirebaseContext.Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
