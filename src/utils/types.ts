/**
 * Тип объекта фрактала
 */
 
 export interface IFractal {
     name?: string;
     xCenter?: number;
     yCenter?: number;
     scale: [number, number, number, number];
     scaleMode: number;
     scaleMotion: number;
     speedScaleMotion: number;
     norm?: string;
     speedNorm?: number;
     motion?: string,
     speedMotion?: number;
     colorStyle?: string;
     speedColorStyle?: number;
     animated?: boolean;
     changeName?(): void;
     changeNorm?(): void;
     changeColor?(): void;
     changeMotion?(): void;
     changeSpeedMotion?(): void;
     changeSpeedNorm?(): void;
     changeSpeedColorStyle?(): void;
     changeXCenter?(): void;
     changeYCenter?(): void;
     toggleAnimated?(): void;
     clickApplyButton?(name: string | undefined, norm: string | undefined, colorStyle: string | undefined, motion: string | undefined): void;
 };
 
 /**
  *  Тип объекта данных фрактала (в частности для рендера опций селектов)
  */
  export interface IOptionFractal {
      name: string;
      value: string;
  }
 