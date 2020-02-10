import { IFractal, Motion } from './types';

/**
 * Дефолтные настройки параметров фрактала.
 */
export const defaultParams: IFractal = {
            name: 2,
            scale: [3.0, 3.0, 0.0, 0.0],
            scaleMode: 0,
            scaleMotion: 0,
            speedScaleMotion: 1.0,
            norm: 'Abs',
            speedNorm: 1.0000000002,
            motion: Motion.stop,
            speedMotion: 1.000000002,
            colorStyle: 'gamma17',
            speedColorStyle: 1.000000002,
            animated: false,
        };
