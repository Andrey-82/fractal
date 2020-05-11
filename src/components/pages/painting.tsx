import React, {useEffect} from 'react';
import Navigator from '../navigator';
import Pictorial from '../pictorial';
import OwnFractal from '../ownFractal';

const Painting: React.FC<any> = props => {
    const {typeFractal} = props;
    return (
        <div className="row">
            <Pictorial {...props} />
            <Navigator {...props} />
            <OwnFractal {...props} />
        </div>
    );
}

export default Painting;
