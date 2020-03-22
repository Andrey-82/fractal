import React from 'react';
import { Provider } from 'react-redux';
import { store } from './reducers/reducer';
import './App.css';
import { Fractal } from './utils/classes';
import Routes from './components/pages/routes';
import Header from './components/header';

const App: React.FC = () => {
    return (
        <Provider store={store}>
                <Header />
                <Routes />
        </Provider>
    );
}

export default App;
