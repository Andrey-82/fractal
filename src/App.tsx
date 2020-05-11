import React from 'react';
import { Provider } from 'react-redux';
import { store } from './reducers/reducer';
import './App.css';
import Routes from './components/pages/routes';
import Header from './components/header';
import { A } from 'hookrouter';
import { baseURL } from './utils/consts'
const { Footer } = require('react-materialize');

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Header />
            <Routes />
            <Footer
                className="blue-grey darken-3"
                copyrights={<span><i className="material-icons">copyright</i>"2020 Копирайт"</span>}
                links={<ul>
                <li><A href="/" className="grey-text text-lighten-4">Главная</A></li>
                <li><A href="/gallery" className="grey-text text-lighten-4">Галерея</A></li>
                <li><A href="/painting/complex" className="grey-text text-lighten-4">Комплексная динамика</A></li>
                <li><A href="/painting/sif" className="grey-text text-lighten-4">Система итерируемых функций</A></li>
                <li><A href="/contacts" className="grey-text text-lighten-4">Контакты</A></li>
                </ul>}
            >
                    <img src={`${baseURL}img/logo-footer.png`} style={{maxWidth: '300px'}}/>
            </Footer>
        </Provider>
    );
}

export default App;
