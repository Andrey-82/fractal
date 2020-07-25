import { IFractal } from './types';

/**
 * Дефолтные настройки параметров фрактала.
 */
export const defaultParams: IFractal = {
    typeFractal: 'complex',
    name: "newX=x*x-y*y+tx;newY=2.0*x*y+ty;",
    xCenter: -0.5,
    yCenter: 0.0,
    scaleRange: 6,
    depthIter: 256,
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

export const defaultParamsIFS: IFractal = {
    typeFractal: 'ifs',
    name: "if(areaCond(2.0*x, 2.0*y)){newX=2.0*x; newY=2.0*y; x=newX; y=newY; continue;}if(areaCond(2.0*x-1.0, 2.0*y)){newX=2.0*x-1.0; newY=2.0*y; x=newX; y=newY; continue;}if(areaCond(2.0*x, 2.0*y-1.0)){newX=2.0*x; newY=2.0*y-1.0; x=newX; y=newY; continue;}",
    xCenter: 0.5,
    yCenter: 0.5,
    scaleRange: 3,
    depthIter: 4,
    scaleXtoY: 1.0,
    scaleMode: 0.0,
    scaleMotion: 0.0,
    speedScaleMotion: 1.0,
    norm: 'x>0.0&&y>0.0&&(x+y)<1.0',
    speedNorm: 1.0,
    motion: ';',
    speedMotion: 1.0,
    colorStyle: 'r=1.0-mod(float(i),3.0)*127.0/255.0;g=1.0-mod(float(i)/3.0,3.0)*127.0/255.0;b=1.0-mod(float(i)/9.0,3.0)*127.0/255.0;',
    speedColorStyle: 1.0,
    animated: false,
    startTime: 1.0,
    history: [{
        xCenter: 0.5,
        yCenter: 0.5,
        scaleRange: 3,
    }]
};

export const defaultParamsIFS3D: IFractal = {
    typeFractal: 'ifs3d',
    name: "if(areaCond(2.0*x, 2.0*y, 2.0*z)){newX=2.0*x; newY=2.0*y; newZ=2.0*z; x=newX; y=newY; z=newZ; continue;}\n\
if(areaCond(2.0*x-1.0, 2.0*y, 2.0*z)){newX=2.0*x-1.0; newY=2.0*y; newZ=2.0*z; x=newX; y=newY; z=newZ; continue;}\n\
if(areaCond(2.0*x, 2.0*y-1.0, 2.0*z)){newX=2.0*x; newY=2.0*y-1.0; newZ=2.0*z; x=newX; y=newY; z=newZ; continue;}\n\
if(areaCond(2.0*x, 2.0*y, 2.0*z-1.0)){newX=2.0*x; newY=2.0*y; newZ=2.0*z-1.0; x=newX; y=newY; z=newZ; continue;}",
    xCenter: 0.5,
    yCenter: 0.5,
    scaleRange: 3,
    depthIter: 4,
    scaleXtoY: 1.0,
    scaleMode: 0.0,
    scaleMotion: 0.0,
    speedScaleMotion: 1.0,
    norm: 'x>0.&&y>0.&&z>0.&&x+y+z<1.0',
    speedNorm: 1.0,
    motion: ';',
    speedMotion: 1.0,
    colorStyle: 'r=1.0-mod(float(i),3.0)*127.0/255.0;g=1.0-mod(float(i)/3.0,3.0)*127.0/255.0;b=1.0-mod(float(i)/9.0,3.0)*127.0/255.0;',
    speedColorStyle: 1.0,
    animated: false,
    startTime: 1.0,
    history: [{
        xCenter: 0.5,
        yCenter: 0.5,
        scaleRange: 3,
    }]
};


export const baseURL = 'http://localhost:3000/'