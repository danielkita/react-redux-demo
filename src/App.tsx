import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import {store} from "./store";
import Increment from './Increment';


function App() {


    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <Increment />
                </header>
            </div>
        </Provider>
    );
}

export default App;
