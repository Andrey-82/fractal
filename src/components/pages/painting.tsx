import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../reducers/actions';
import { store, dispatch } from '../../reducers/reducer';
import Navigator from '../navigator';
import Pictorial from '../pictorial';
import OwnFractal from '../ownFractal';

const handlers = bindActionCreators(actions, dispatch);
const mapDispatchToProps = () => handlers;
let state = store.getState();
let mapStateToProps = () => state;

const update = () => {
    state = store.getState();
    mapStateToProps = () => state;
//    console.log(state);
}

store.subscribe(update);

const Painting: React.FC<any> = (props) => {
    return (
        <div className="row">
            <Pictorial {...props} />
            <Navigator {...props} />
            <OwnFractal {...props} />
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Painting);
