import React from 'react';
import './App.css';
import { Fractal } from './utils/classes';
import Routes from './components/pages/routes';
import Header from './components/header';

const params = Fractal.getParamsFromUrl();
const Fr = new Fractal(params);
console.log(Fr.p.name);
Fr.draw();
const App: React.FC = () => {
    return (
        <React.Fragment>
            <Header />
            <Routes />
        </React.Fragment>
    );
}

export default App;
