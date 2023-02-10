import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Record} from "./features/record/Record";

function App() {
    return (
        <div className="app-wrapper">
            <Record />
        </div>
    );
}

export default App;
