import React from 'react';
import {render} from '../utils/webgl'
import { IFractal } from '../utils/types';

const Pictorial: React.FC<IFractal> = (props) => {
    const fractal = {...props};
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const draw = (ctx: any, x: number, y: number) => {
        ctx.fillStyle = 'red';
        ctx.fillRect(x, y, 5, 5);
    }
    const handleClick = () => {
        const canvas = canvasRef.current;console.log(canvas);
        if (!canvas) return;
        render(canvas, fractal);
    }
    
    return (
        <div className="col s12 m7 l9 relative z-depth-2 blue-grey darken-1">
            <canvas className="pictorial"
                ref={canvasRef}
            ></canvas>
            <canvas className="pictorial upper"
                onClick={handleClick}
            ></canvas>
        </div>
    );
}

export default Pictorial;