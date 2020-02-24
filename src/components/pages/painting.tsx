import React from 'react';
import Navigator from '../navigator';
import Pictorial from '../pictorial';
import OwnFractal from '../ownFractal';

const Painting: React.FC = () => {
    return (
        <div className="row">
            <Pictorial />
            <Navigator />
            <OwnFractal />
        </div>
    );
}

export default Painting;
