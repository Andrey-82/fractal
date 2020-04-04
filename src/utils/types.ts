/**
 * Объект масштаба и координат центра канваса
 */
 export interface ICenterScale {
     xCenter: number;
     yCenter: number;
     scaleRange: number;
 }

/**
 * Тип объекта фрактала
 */
 export interface IFractal {
     name?: string;
     xCenter?: number;
     yCenter?: number;
     scale?: string;
     scaleRange?: number;
     scaleXtoY?: number;
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
     startTime?: number;
     history: ICenterScale[];
     changeName?(): void;
     changeNorm?(): void;
     changeColor?(): void;
     changeScaleRange?(s: number): void;
     changeScaleXtoY?(XtoY: number): void;
     changeMotion?(): void;
     changeSpeedMotion?(): void;
     changeSpeedNorm?(): void;
     changeSpeedColorStyle?(): void;
     changeXCenter?(x: number): void;
     changeYCenter?(y: number): void;
     toggleAnimated?(): void;
     setStartTime?(time: number): void;
     pushToHistory?(xCenter: number, yCenter: number, scaleRange: number): void;
     backToHistory?(): void;
     clickApplyButton?(name: string | undefined, norm: string | undefined, colorStyle: string | undefined, motion: string | undefined): void;
 };
 
 /**
  * Тип экшена
  */
  export interface IAction {
    type: string,
    name?: string,
    norm?: string,
    scaleRange?: number,
    scaleXtoY?: number,
    colorStyle?: string,
    motion?: string,
    speedMotion?: number,
    speedNorm?: number,
    speedColorStyle?: number,
    xCenter?: number,
    yCenter?: number,
    animated?: boolean,
    startTime?: number,
    step?: ICenterScale,
}
 
 /**
  *  Тип объекта данных фрактала (в частности для рендера опций селектов)
  */
  export interface IOptionFractal {
      name: string;
      value: string;
  }
 