import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";

import App from './App';
import {appReducer} from './reducers';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(appReducer);



const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    rootElement

    
        // <App />,rootElement
        
);
