import { IFractal } from './types';

/**
 * Дефолтные настройки параметров фрактала.
 */
export const defaultParams: IFractal = {
            name: "2",
            xCenter: 0,
            yCenter: 0,
            scale: [3.0, 3.0, 0.0, 0.0],
            scaleMode: 0,
            scaleMotion: 0,
            speedScaleMotion: 1.0,
            norm: 'Abs',
            speedNorm: 1,
            motion: 'stop',
            speedMotion: 1,
            colorStyle: 'gamma17',
            speedColorStyle: 1,
            animated: false,
        };
