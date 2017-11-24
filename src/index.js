import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import newsReducer from './reducers/newsReducer'

const rootReducer = combineReducers({news: newsReducer})
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
