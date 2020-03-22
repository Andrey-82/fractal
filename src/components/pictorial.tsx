import React from 'react';
import { Fractal } from '../utils/classes';
import { IFractal } from '../utils/types';

const Pictorial: React.FC<IFractal> = (props) => {
    const fractal = {...props};
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const canvas2dRef = React.useRef<HTMLCanvasElement>(null);
    let canvas: HTMLCanvasElement | null,
        canvas2d: HTMLCanvasElement | null,
        gl: any;
    canvas = canvasRef.current;
    canvas2d = canvas2dRef.current;
    /**
    * Обработчик изменения размеров канваса
    */
    const resize = () => {
        if (!canvas || !canvas2d) return;
        const gl = canvas.getContext("webgl",{preserveDrawingBuffer:true});
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        gl && gl.viewport(0, 0, canvas.width, canvas.height);
        canvas2d.width = canvas.offsetWidth;
        canvas2d.height = canvas.offsetHeight;
        const {changeScaleXtoY} = fractal;
        const XtoY = canvas.width / canvas.height;
        changeScaleXtoY && changeScaleXtoY(XtoY);
    };
    window.addEventListener('resize', resize);
    React.useEffect(() => {
        canvas = canvasRef.current;
        canvas2d = canvas2dRef.current;
        if (!canvas) return;
        resize();
        Fractal.draw(canvas, fractal);
    }, []);
    React.useEffect(() => {
        if (!canvas) return;
        resize();
        Fractal.draw(canvas, fractal);
    }, [fractal]);
    
    const handleClick = () => {
       
    }
    
    return (
        <div className="col s12 m7 l9 relative z-depth-2 blue-grey darken-1">
            <canvas className="pictorial"
                ref={canvasRef}
            ></canvas>
            <canvas className="pictorial upper"
                ref={canvas2dRef}
                onClick={handleClick}
            ></canvas>
        </div>
    );
}

export default Pictorial;