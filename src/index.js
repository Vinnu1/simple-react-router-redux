import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import App from './App';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

console.log("Store state at start :", store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
