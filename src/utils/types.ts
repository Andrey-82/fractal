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
     typeFractal?: string; // тип фрактала
     name?: string; // формула(ы) функций действий
     xCenter?: number; // х-координата центра области на холсте
     yCenter?: number; // у-координата центра области на холсте
     scale?: string; 
     scaleRange?: number; // масштаб - пределы области на холсте от - scaleRange до + scaleRange по обеим осям
     depthIter?: number; // количество итераций вычислений
     scaleXtoY?: number; // отношение размеров холста
     scaleMode: number;
     scaleMotion: number; //формулы изменения масштаба (для анимации)
     speedScaleMotion: number;// параметр регулирующий скорость изменений масштаба
     norm?: string; // условие для проверки принадлежит ли точка фракталу
     speedNorm?: number; // скорость изменения условия (для анимации при динамическом условии)
     motion?: string, // формулы анимации
     speedMotion?: number; // параметр скорости изменения анимации
     colorStyle?: string; // формулы - способ раскраски фрактала
     speedColorStyle?: number; // параметр скорости изменения раскраски фрактала (при динамической расскраске)
     animated?: boolean; // флаг включения анимации
     startTime?: number; // временная точка начала анимации
     history: ICenterScale[]; // массив последовательных приближений фрактала, при выделении левой кнопкой мыши области на холсте
     changeType?(): void;
     setFractalFromHash?(hash: IFractal): void;
     changeName?(): void;
     changeNorm?(): void;
     changeColor?(): void;
     changeScaleRange?(s: number): void;
     changeDepthIter?(depth: number): void;
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
    type: string;
    typeFractal?: string;
    name?: string;
    norm?: string;
    scaleRange?: number;
    depthIter?: number;
    scaleXtoY?: number;
    colorStyle?: string;
    motion?: string;
    speedMotion?: number;
    speedNorm?: number;
    speedColorStyle?: number;
    xCenter?: number;
    yCenter?: number;
    animated?: boolean;
    startTime?: number;
    step?: ICenterScale;
    hash?: IFractal;
}
 
 /**
  *  Тип объекта данных фрактала (в частности для рендера опций селектов)
  */
  export interface IOptionFractal {
      type?: string;
      name: string;
      value: string;
  }
 