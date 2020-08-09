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
        params = {...params,...parseParams};
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
    public static renderOptions = (options: IOptionFractal[], typeFractal: string = '') => {
        if(!typeFractal) return options.map(option => <option value={option.value} key={option.name}> {option.name} </option>);
        if(typeFractal) return options.filter(option => option.type === typeFractal).map(option => <option value={option.value} key={option.name}> {option.name} </option>);
    }
}

/**
 * Класс для работы с канвасом
 */
 export class Canvas {
     /**
      * Статический метод изменений размеров канваса
      */
    public static resize = (canvas: HTMLCanvasElement, fractal: IFractal, gl: any) => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        gl && gl.viewport(0, 0, canvas.width, canvas.height);
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        const {changeScaleXtoY} = fractal;
        const XtoY = canvas.width / canvas.height;
        changeScaleXtoY && changeScaleXtoY(XtoY);
    };
    
    /**
     * Статичекий метод паралельного переноса и установки параметров
     */
    public static translateArea = (canvas: HTMLCanvasElement, e: any, isPressed: boolean, x0: number, y0: number) => {
        let T = [x0/canvas.width, y0/canvas.height];
        if (isPressed) {
            canvas.width = canvas.width;
            const x = e.pageX - canvas.offsetLeft;
            const y = e.pageY - canvas.getBoundingClientRect().top - window.pageYOffset;
                T = [
                    (x - x0) / canvas.width, 
                    (-y + y0) / canvas.height
                ];
                T[0] = +T[0];
                T[1] = +T[1];
            return {T};
        } else return false;
    };
    /**
     * Статичекий метод гомотетии и установки параметров
     */
    public static scaleArea = (canvas: HTMLCanvasElement, e: any, scale: number) => {
        const spline = (t: number, x: number) => 0.9*x - 0.89*t;
        let step = 0.1 * scale;
        switch (true) {
//            case scale > 100 : step = 0.01 * scale; break;
//            case scale <= 100 && scale > 11: step = 1; break;
//            case scale <= 11 && scale > 10: step = spline(10, scale); break;
//            case scale <= 10 && scale > 1.1: step = 0.1; break;
//            case scale <= 1.1 && scale > 1: step = spline(1, scale); break;
//            case scale <= 1 && scale > 0.11: step = 0.01; break;
//            case scale <= 0.11 && scale > 0.1: step = spline(0.1, scale); break;
//            case scale <= 0.1 && scale > 0.011: step = 0.001; break;
//            case scale <= 0.011 && scale > 0.01: step = spline(0.01, scale); break;
//            case scale <= 0.01 && scale > 0.0011: step = 0.0001; break;
//            case scale <= 0.0011 && scale > 0.001: step = spline(0.001, scale); break;
            case scale <= 0.001 : step = 0.00001; break;
        }
        e.deltaY < 0 && (step = -step);
        const newScale = scale + step < 0.00001 ? 0.00001 : scale + step;
        return newScale;
    };
     
 }