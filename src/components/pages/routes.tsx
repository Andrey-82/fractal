import React from 'react';
import {useRoutes} from 'hookrouter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../reducers/actions';
import { dispatch } from '../../reducers/reducer';
import Gallery from './gallery';
import Contacts from './contacts';
import HomePage from './homePage';
import Painting from './painting';
import Rules from './rules';
import Page404 from './page404';
/* 
 * Пути
 */
const handlers = bindActionCreators(actions, dispatch);
const {changeType} = handlers;
const mapDispatchToProps = () => handlers;
const mapStateToProps = (state: any) => state;

const routes = (props: any, changeType: any) => ({
    '/': () => <HomePage />,
    '/gallery': () => <Gallery />,
    '/painting/:typeFractal': (F: any) => {
        if(F.typeFractal !== props.typeFractal) {changeType(F.typeFractal);}
        return <Painting {...props}/>
    },
    '/contacts': () => <Contacts />,
    '/rules': () => <Rules />,
});

const Routes: React.FC<any> = props => {
    const routeResult = useRoutes(routes(props, changeType));
    return (
        routeResult || <Page404 />
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);


