import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './redux/index';
import {Provider} from "react-redux";

function AppWithCallbackAfterRender() {
    useEffect(() => {
        console.log('rendered');
    });

 
    return <Provider store={store}>
             <App tab="home" />
           </Provider>
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<AppWithCallbackAfterRender />);

reportWebVitals();
