import React from 'react';
import { Provider } from 'react-redux';
import { store } from './reducers/reducer';
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
        <Provider store={store}>
                <Header />
                <Routes />
        </Provider>
    );
}

export default App;
