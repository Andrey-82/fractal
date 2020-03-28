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