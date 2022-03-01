import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './store/reducer';

import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { watchAgeUp } from './sagas/Saga';

const sagaMiddleWare=createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleWare) );
sagaMiddleWare.run(watchAgeUp);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

