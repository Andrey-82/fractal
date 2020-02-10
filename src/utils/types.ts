/**
 * Тип объекта фрактала
 */
 export enum Motion {stop, move};
 
 export interface IFractal {
     name: string | number;
     scale: [number, number, number, number];
     scaleMode: number;
     scaleMotion: number;
     speedScaleMotion: number;
     norm: string;
     speedNorm: number;
     motion: Motion;
     speedMotion: number;
     colorStyle: string;
     speedColorStyle: number;
     animated: boolean;
 };
 