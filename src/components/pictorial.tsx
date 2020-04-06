import React from 'react';
import { Fractal, Canvas } from '../utils/classes';
import { IFractal } from '../utils/types';

const Pictorial: React.FC<IFractal> = (props) => {
    const fractal = {...props};
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const canvas2dRef = React.useRef<HTMLCanvasElement>(null);
    let canvas = canvasRef.current, canvas2d = canvas2dRef.current;
    let gl: any;
    let context2d: any;
    const [isPressed, setIsPressed] = React.useState(false);
    const [coord, setCoord] = React.useState({x: 0, y: 0});
    const [transform, setTransform] = React.useState({T: [0, 0], H: 1});
    React.useEffect(() => {
        canvas = canvasRef.current;
        canvas2d = canvas2dRef.current;
        if (!canvas || !canvas2d) return;
        gl = canvas.getContext('webgl');
        context2d = canvas2d.getContext('2d');
        Canvas.resize(canvas, canvas2d, fractal, gl);
        window.addEventListener('resize', () => {
            if (!canvas || !canvas2d) return;
            Canvas.resize(canvas, canvas2d, fractal, gl);
        });
        Fractal.draw(canvas, fractal);
    }, []);
    React.useEffect(() => {
        Fractal.setParamsToUrl(fractal);
        if (!canvas) return;
        Fractal.draw(canvas, fractal);
    }, [fractal]);
    
    /** Обработчик нажатия мыши на канвасе */
    const handleMouseDown = (e: any) => {
        if (canvas2d && e.button === 0) {
            const x = e.pageX - canvas2d.offsetLeft;
            const y = e.pageY - canvas2d.getBoundingClientRect().top - window.pageYOffset;
            setCoord({x, y});
            setIsPressed(true);
        }
    };
    
    /** Обработчик движения курсора над канвасом */
    const handleMouseMove = (e: any) => {
        if (canvas2d) {
            if (!context2d) context2d = canvas2d.getContext('2d');
            const newTransform: any = Canvas.zoomSelectedArea(canvas2d, context2d, e, isPressed, coord.x, coord.y);
            newTransform && setTransform(newTransform);
        }
    };
    
    /** Обработчик mouseUp над канвасом */
    const handleMouseUp = (e: any) => {
        canvas2d && (canvas2d.width = canvas2d.width);
        if (isPressed && fractal.pushToHistory && fractal.changeXCenter
            && fractal.changeYCenter
            && fractal.changeScaleRange
            && (fractal.xCenter || fractal.xCenter === 0)
            && (fractal.yCenter || fractal.yCenter === 0)
            && fractal.scaleRange) {
                const x = +(fractal.xCenter + fractal.scaleRange * transform.T[0]).toFixed(3);
                const y = +(fractal.yCenter + fractal.scaleRange * transform.T[1]).toFixed(3);
                const s = +(fractal.scaleRange * transform.H).toFixed(3);
                fractal.changeXCenter(x);
                fractal.changeYCenter(y);
                fractal.changeScaleRange(s);
                fractal.pushToHistory(x, y, s);
        }
        setIsPressed(false);
    };
    
    /** Обработчик клика по канвасу правой кнопкой. */
    const handleOnContextMenu = (e: any) => {
        e.preventDefault();
        fractal.backToHistory && fractal.backToHistory();
    };
    
    return (
        <div className="col s12 m7 l9 pd-0">
            <div className="wrap-pict z-depth-2 black">
                <canvas className="pictorial"
                    ref={canvasRef}
                ></canvas>
                <canvas className="pictorial upper"
                    ref={canvas2dRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onContextMenu={handleOnContextMenu}
                ></canvas>
            </div>
        </div>
    );
}

export default Pictorial;