import React from 'react';
import {useRoutes} from 'hookrouter';
import Gallery from './gallery';
import HomePage from './homePage';
import Page404 from './page404';
/* 
 * Пути
 */

const routes = {
    '/': () => <HomePage />,
    '/gallery': () => <Gallery />,
};

const Routes: React.FC = () => {
    const routeResult = useRoutes(routes);
    return (
        routeResult || <Page404 />
    );
}

export default Routes;


