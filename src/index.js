import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";

import {addUser} from "./actions";
import reducers from "./reducers";
import setupSocket from "./sockets";
import './index.css';
import App from './App';
import handleNewMessage from "./sagas";
import username from "./utils/name";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers,
                        applyMiddleware(sagaMiddleware)
    );

    const socket = setupSocket(store.dispatch,username);

    sagaMiddleware.run(handleNewMessage,{socket,username})
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
