import React from 'react';
import { IFractal, IOptionFractal } from './types';
import { defaultParams } from './consts';
import { render } from './webgl';
/** 
 * Класс фрактал
 */
 
export class Fractal {
    /** Объект параметров фрактала */
    public p: IFractal;
    
    public static rId: number;
    public static time: number;
    public static isAnim: boolean = false;
    
    constructor(params: IFractal) {
        this.p = params;
    }

    /** Статический метод рендера фрактала на канвас */
    public static draw(canvas: HTMLCanvasElement, fractal: IFractal) {
        render(canvas, fractal);
        if (fractal.animated && fractal.startTime){
            Fractal.isAnim = true;
            Fractal.time = fractal.startTime++;
            Fractal.rId = requestAnimationFrame(() => Fractal.draw(canvas, fractal));
        } else if (fractal.startTime) {
            cancelAnimationFrame(Fractal.rId);
            if (Fractal.isAnim){
                fractal.setStartTime && fractal.setStartTime(Fractal.time);
                Fractal.isAnim = false;
                return;                
            } else {
                fractal.setStartTime && fractal.setStartTime(fractal.startTime);
                Fractal.isAnim = false;
                return;
            }
        }
    }

    /** Статический метод получения параметров из урла */
    public static getParamsFromUrl() {
        const jsonParams = decodeURI(window.location.hash.substring(1));
        let params: IFractal = defaultParams;
        let parseParams = {};
        try {parseParams = JSON.parse(jsonParams);} catch {};
        params = {...params,...parseParams};console.log(params);
        return params;
    }
    
    /** Статический метод записи параметров в урл */
    public static setParamsToUrl(params: IFractal) {
        cancelAnimationFrame(Fractal.rId);
        const json = JSON.stringify(params);
        window.history.pushState("", "", '#' + json);
    }
    
    /**
     * Статический метод-render опций селекта
     * @param options - массив объектов опций
     */
    public static renderOptions = (options: IOptionFractal[]) => 
        options.map(option => <option value={option.value} key={option.name}> {option.name} </option>)
}

/**
 * Класс для работы с канвасом
 */
 export abstract class Canvas {
     
    public static instCanvas: HTMLCanvasElement | null = null; 
    public static context: any = null; 
     /**
      * Статический метод изменений размеров канваса
      */
    public static resize = (canvas: HTMLCanvasElement, canvas2d: HTMLCanvasElement, fractal: IFractal, gl: any) => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        gl && gl.viewport(0, 0, canvas.width, canvas.height);
        canvas2d.width = canvas.offsetWidth;
        canvas2d.height = canvas.offsetHeight;
        const {changeScaleXtoY} = fractal;
        const XtoY = canvas.width / canvas.height;
        changeScaleXtoY && changeScaleXtoY(XtoY);
    };
    
    /**
     * Статичекий метод выделения прямоугольной области и установки параметров
     */
    public static zoomSelectedArea = (canvas: HTMLCanvasElement, context2d: any, e: any, isPressed: boolean, x0: number, y0: number) => {
        if (!Canvas.instCanvas) Canvas.instCanvas = canvas;
        if (!Canvas.context) Canvas.context = context2d;
        let T = [0, 0] , H = 1;
        if (isPressed) {
            Canvas.instCanvas.width = Canvas.instCanvas.width;
            const x = e.pageX - Canvas.instCanvas.offsetLeft;
            const y = e.pageY - Canvas.instCanvas.getBoundingClientRect().top - window.pageYOffset;
            Canvas.context.strokeStyle = 'green';
            Canvas.context.strokeRect(x0, y0, x - x0, y - y0);
            if (Math.abs(x - x0) > 10 && Math.abs(y - y0) > 10) {
                T = [
                    (x + x0 - Canvas.instCanvas.width) / 2 / Canvas.instCanvas.width, 
                    (-y - y0 + Canvas.instCanvas.height) / 2 / Canvas.instCanvas.height
                ];
                H = (x -y + y0 - x0) > 0 ? Math.abs(x - x0) / Canvas.instCanvas.width : Math.abs(y - y0) / Canvas.instCanvas.height;
                H = +H.toFixed(3);
                T[0] = +T[0].toFixed(3);
                T[1] = +T[1].toFixed(3);
            };
            return {T, H};
        } else return false;
    };
     
 }