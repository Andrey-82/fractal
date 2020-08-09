import React from 'react';
import Navigator from '../navigator';
import Pictorial from '../pictorial';
import OwnFractal from '../ownFractal';

const Painting: React.FC<any> = props => {
    return (
        <div className="row">
            <Pictorial {...props} />
            <Navigator {...props} />
            <OwnFractal {...props} />
        </div>
    );
}

export default Painting;
