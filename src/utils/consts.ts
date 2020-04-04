import { IFractal } from './types';

/**
 * Дефолтные настройки параметров фрактала.
 */
export const defaultParams: IFractal = {
            name: "newX=x*x-y*y+tx;newY=2.0*x*y+ty;",
            xCenter: -0.5,
            yCenter: 0.0,
            scaleRange: 6,
            scaleXtoY: 1.0,
            scaleMode: 0.0,
            scaleMotion: 0.0,
            speedScaleMotion: 1.0,
            norm: '(x*x*y*y)>100.0',
            speedNorm: 1.0,
            motion: ';',
            speedMotion: 1.0,
            colorStyle: 'r=1.0-mod(float(i),3.0)*127.0/255.0;g=1.0-mod(float(i)/3.0,3.0)*127.0/255.0;b=1.0-mod(float(i)/9.0,3.0)*127.0/255.0;',
            speedColorStyle: 1.0,
            animated: false,
            startTime: 1.0,
            history: [{
                xCenter: -0.5,
                yCenter: 0.0,
                scaleRange: 6,
            }]
        };