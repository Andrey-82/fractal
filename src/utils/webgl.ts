import { IFractal, IOptionFractal } from './types';
import { defaultParams } from './consts';

/**
 * Множество функций и параметров для webgl
 */
 
/**
 * Вершины симплексов для вертиксного шейдера
 */
const vertices: number[] = [
   -1.0, -1.0,
    1.0, -1.0,
    0.0, 0.0,

    0.0, 0.0,
    1.0, -1.0,
    1.0, 1.0,

    1.0, 1.0,
   -1.0, 1.0,
    0.0, 0.0,

    0.0, 0.0,
   -1.0, 1.0,
   -1.0, -1.0
];
        
/**
 * Программа для вершинного шейдера
 */
const vertexShaderSource = "attribute vec3 aVertexPosition;\n\
    void main(){gl_Position = vec4(aVertexPosition, 1.0);}";
 
/**
 *  Функция для составления фрагментного шейдера
 *  params:
 *  fractal - параметры фрактала
 */
const fragmentShaderSource = (fractal: IFractal): string => {
    const shaderSource = 'precision highp float; \n\
    const highp float PI = 3.14159265359; \n\
    uniform highp float uTime; uniform vec2 uResolution;\n\
    float tmp, newX, newY;\n\
    float speed='+fractal.speedMotion+';\n\
    float speedNorm='+fractal.speedNorm+';\n\
    float speedColorStyle='+fractal.speedColorStyle+';\n\
    void main(){\n\
    vec2 position = gl_FragCoord.xy / uResolution.xy;\n\
    highp float x=0.0, newX=0.0;\n\
    highp float y=0.0, newY=0.0;\n\
    highp float z=0.0, newZ=0.0;\n\
    highp float u = position.x;\n\
    highp float v = position.y;float tx = (3.0 * 2.0*(u-0.5) + 2.0);\n\
    float ty = (3.0 * 2.0*(v-0.5) + 2.0);'+fractal.motion+' for (int i = 0; i<256; i++){\n\
    '+fractal.name+' x=newX; y=newY; if ('+fractal.norm+'){\n\
    float r, g, b;'+ fractal.colorStyle; console.log(shaderSource);
    return shaderSource;
};

/**
 * Функция для компиляции шейдеров
 * params:
 * gl - контекст канваса,
 * shaderSource - текст шейдера,
 * shaderType - тип шейдера
 */
const compileShader = (gl: any, shaderSource: string, shaderType: any): any => {
    const shader = gl.createShader(shaderType);
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);
    return shader;
};

/**
 *  Функция создания программы для шейдера
 *  params:
 *  gl - контекст канваса,
 *  fragmentShader - скомпилированный фрагментный шейдер,
 *  vertexShader - скомпилированный вершинный шейдер
 */
const createShaderProgram = (gl: any, fragmentShader: any, vertexShader: any): any => {
    const shaderProgram = gl.createProgram(); // создали шейдерную программу в конвеере
    gl.attachShader(shaderProgram, vertexShader);//закидываем в неё скомпилинные шейдеры
    gl.attachShader(shaderProgram, fragmentShader);//закидываем в неё скомпилинные шейдеры
    gl.linkProgram(shaderProgram);//слинковываем программу
    gl.useProgram(shaderProgram);
    gl.deleteShader(fragmentShader);//экономим память 
    gl.deleteShader(vertexShader);
    return shaderProgram;
};

/**
 * Функция буферизации
 * params:
 * gl - контекст канваса,
 * vertices - массив вершин
 */
const bufferVertices = (gl: any, vertices: number[]): void => {
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
};
 
 /**
  * Функция отрисовки сцены в текущий момент
  * params:
  * gl - контекст канваса,
  * animated - флаг анимации,
  * stratTime - начальный момент,
  * timeLocation - ссылка на переменную uTime в шейдерной программе,
  * time - текущий момент,
  * resolutionLocation - ссылка на uResolution в шейдерной программе,
  * resolution - размеры канваса
  */
const  drawScene = (
        gl: any,
        animated: boolean | undefined, 
        startTime: number,
        timeLocation: any, 
        time: number, 
        resolutionLocation: any, 
        resolution: number[],
    ): any => {
        gl.uniform1f(timeLocation, time);
        gl.uniform2fv(resolutionLocation, resolution);
        gl.drawArrays(gl.TRIANGLES, 0, 12);
        if (animated) {
            let newTime = (Date.now() - startTime) / 1000;
            requestAnimationFrame(drawScene(gl, animated, startTime, timeLocation, newTime, resolutionLocation, resolution));
        };
};

/**
 * Функция рендера фрактала
 * params:
 * canvas - ссылка на канвас,
 * fractal - параметры фрактала
 */
export const render = (canvas: any, fractal: IFractal): void => {
    const gl = canvas.getContext("webgl",{preserveDrawingBuffer:true});
    const fragmentShader = compileShader(gl, fragmentShaderSource(fractal), gl.FRAGMENT_SHADER);
    const vertexShader = compileShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
    const shaderProgram = createShaderProgram(gl, fragmentShader, vertexShader);
    const resolution = [canvas.width, canvas.height];
    const time = 1;
    const resolutionLocation = gl.getUniformLocation(shaderProgram, "uResolution");
    const timeLocation = gl.getUniformLocation(shaderProgram, "uTime");
    const vertexPositionLocation = gl.getAttribLocation(shaderProgram, "aVertexPosition");
    bufferVertices(gl, vertices);
    gl.enableVertexAttribArray(vertexPositionLocation);
    gl.vertexAttribPointer(vertexPositionLocation, 2, gl.FLOAT, false, 0, 0);
    drawScene(gl, fractal.animated, fractal.startTime, timeLocation, time, resolutionLocation, resolution);
};


