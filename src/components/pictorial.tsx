import React from 'react';
import { Fractal, Canvas } from '../utils/classes';
import { IFractal } from '../utils/types';
import { overflow, scrollTopToValue } from '../utils/functions';
import { useQueryParams } from 'hookrouter';

const Pictorial: React.FC<IFractal> = props => {
    const [params, setParams] = useQueryParams();
    const fractal = {...props};
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    let canvas = canvasRef.current;
    let gl: any;
    const [isPressed, setIsPressed] = React.useState(false);
    const [coord, setCoord] = React.useState({x: 0, y: 0});
    React.useEffect(() => {
        canvas = canvasRef.current;
        if (!canvas) return;
        gl = canvas.getContext('webgl');
        Canvas.resize(canvas, fractal, gl);
        window.addEventListener('resize', () => {
            if (!canvas) return;
            Canvas.resize(canvas, fractal, gl);
        });
        Fractal.draw(canvas, fractal);
        if (params.hash) {
            const jsonParams = JSON.parse(decodeURI(params.hash));
            fractal && fractal.setFractalFromHash && fractal.setFractalFromHash(jsonParams);
        }
        scrollTopToValue('html', 0);
    }, []);
    React.useEffect(() => {
        Fractal.setParamsToUrl(fractal);
        if (!canvas) return;
        Fractal.draw(canvas, fractal);
    }, [fractal]);
    React.useEffect(() => {
        if (!canvas) return;
        Canvas.resize(canvas, fractal, gl);
    }, [props.typeFractal]);
    
    /** Обработчик нажатия мыши на канвасе */
    const handleMouseDown = (e: any) => {
        if(!canvas) return;
        const x = e.pageX - canvas.offsetLeft;
        const y = e.pageY - canvas.getBoundingClientRect().top - window.pageYOffset;
        setCoord({x, y});
        setIsPressed(true);
    };
    
    /** Обработчик движения курсора над канвасом */
    const handleMouseMove = (e: any) => {
        if (canvas && isPressed) {
            const translate: any = Canvas.translateArea(canvas, e, isPressed, coord.x, coord.y);
            const x = e.pageX - canvas.offsetLeft;
            const y = e.pageY - canvas.getBoundingClientRect().top - window.pageYOffset;
            setCoord({x, y});
            if (fractal.changeXCenter
            && fractal.changeYCenter
            && (fractal.xCenter || fractal.xCenter === 0)
            && (fractal.yCenter || fractal.yCenter === 0)
            && fractal.scaleRange) {
                const x = +(fractal.xCenter - fractal.scaleRange * translate.T[0]).toFixed(5);
                const y = +(fractal.yCenter - fractal.scaleRange * translate.T[1]).toFixed(5);
                fractal.changeXCenter(x);
                fractal.changeYCenter(y);
            }
        }
    };
    
    /** Обработчик mouseUp над канвасом */
    const handleMouseUp = (e: any) => {
        setIsPressed(false);
    };
    
    /** Обработчик прокручивания колеса мыши. */
    const handleWheel = (e: any) => {
        e.stopPropagation();
        if (canvas && fractal.scaleRange && fractal.changeScaleRange) {
            fractal.changeScaleRange(+Canvas.scaleArea(canvas, e, fractal.scaleRange).toFixed(5));
        }
    };
    
    return (
        <div className="col s12 m7 l9 pd-0">
            <div className="wrap-pict z-depth-2 black">
                <canvas className="pictorial"
                    ref={canvasRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onWheel={handleWheel}
                    onMouseEnter={() => overflow('html', 'hidden')}
                    onMouseLeave={() => overflow('html', 'auto')}
                ></canvas>
            </div>
        </div>
    );
}

export default Pictorial;