import { IFractal } from './types';

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
export const vertexShaderSource = "attribute vec3 aVertexPosition;"+
    "void main(){gl_Position = vec4(aVertexPosition, 1.0);}";
 
/**
 *  Функция для составления фрагментного шейдера
 *  params:
 *  fractal - параметры фрактала
 */
export const fragmentShaderSourceComplex = (fractal: IFractal): string => {
    const {
        xCenter,
        yCenter,
        name,
        norm,
        scaleRange,
        depthIter,
        scaleXtoY,
        motion,
        speedNorm,
        speedColorStyle,
        speedMotion,
    } = fractal;
    const sRX = scaleRange ? scaleRange.toFixed(3) : '1.0';
    const sRY = scaleRange && scaleXtoY ? (scaleRange / scaleXtoY).toFixed(3) : '1.0';
    const sM = speedMotion ? speedMotion.toFixed(3) : '1.0';
    const sN = speedNorm ? speedNorm.toFixed(3) : '1.0';
    const sC = speedColorStyle ? speedColorStyle.toFixed(3) : '1.0';
    const xC = xCenter ? xCenter.toFixed(3) : '0.0';
    const yC = yCenter && scaleXtoY? (yCenter / scaleXtoY).toFixed(3) : '0.0';
    const shaderSource = "precision highp float; "+
        "const highp float PI = 3.14159265359; "+
        "uniform highp float uTime; uniform vec2 uResolution;"+
        "float tmp, newX, newY, prevX, prevY;"+
        "float speed=2.0;"+
        `float speedMotion=${sM};`+
        `float speedNorm=${sN};`+
        `float speedColorStyle=${sC};`+
        "void main(){"+
        "vec2 position = gl_FragCoord.xy / uResolution.xy;"+
        "highp float x=0.0, newX=0.0;"+
        "highp float y=0.0, newY=0.0;"+
        "highp float z=0.0, newZ=0.0;"+
        "highp float u = position.x;"+
        "highp float v = position.y;"+
        `float tx = (${sRX} * (u-0.5) + ${xC});`+
        `float ty = (${sRY} * (v-0.5) + ${yC});`+
        `x=tx; y=ty; ${motion}`+
        `for (int i = 0; i<${depthIter}; i++){`+
         `${name} prevX=x; prevY=y;x=newX; y=newY;`+
          `  if (${norm}){`+
          `      float r, g, b;${fractal.colorStyle}`+
          "      gl_FragColor=vec4(r,g,b,.0);break;"+
          "  } else {"+
          "      gl_FragColor=vec4(0.0,0.0, 0.0,1.0);"+
          "  };"+
        "};"+
    "}";
//    console.log('shader = ', shaderSource, scaleRange);
    return shaderSource;
};
/**
 *  Функция для составления фрагментного шейдера
 *  params:
 *  fractal - параметры фрактала
 */
export const fragmentShaderSourceIFS = (fractal: IFractal): string => {
    const {
        xCenter,
        yCenter,
        name,
        norm,
        scaleRange,
        depthIter,
        scaleXtoY,
        motion,
        speedNorm,
        speedColorStyle,
        speedMotion,
    } = fractal;
    const sRX = scaleRange ? scaleRange.toFixed(3) : '1.0';
    const sRY = scaleRange && scaleXtoY ? (scaleRange / scaleXtoY).toFixed(3) : '1.0';
    const sM = speedMotion ? speedMotion.toFixed(3) : '1.0';
    const sN = speedNorm ? speedNorm.toFixed(3) : '1.0';
    const sC = speedColorStyle ? speedColorStyle.toFixed(3) : '1.0';
    const xC = xCenter ? xCenter.toFixed(3) : '0.0';
    const yC = yCenter && scaleXtoY? (yCenter / scaleXtoY).toFixed(3) : '0.0';
    const shaderSource = "precision highp float; "+
        "const highp float PI = 3.14159265359; \n"+ 
        "uniform highp float uTime; uniform vec2 uResolution;\n"+
        "vec2 P;float tmp, newX, x, y, newY, prevX, prevY, tx, ty;\n"+
        `bool areaCond(float x, float y){return (${norm});}\n`+
//        "bool areaCond(vec2 p){return (p.x*p.x+p.y*p.y<100.0);}"+
//        "vec2 f1(vec2 p){return vec2((cos(uTime*0.5)*0.864*(p.x-1.882)-(p.y-0.111)*0.281)/0.772, (0.824*(p.y-0.111)+(p.x-1.882)*0.212)/0.772);}"+
//        "vec2 f2(vec2 p){return vec2((-0.378*(p.x+0.785)-(p.y+8.096)*0.521)/0.208, (cos(uTime*0.3)*0.088*(p.x+8.096)+(p.y+0.785)*0.464)/0.208);}"+
//        "void f1(float x, float y){newX = 1.53*x+2.37*y; newY = 1.37*y-2.0*x;}"+
//        "void f2(float x, float y){newX = 2.53*x+2.37*y-1.0, 2.37*y-1.53*x-1.0;}"+
//        "vec2 f3(vec2 p){return vec2(2.0*p.x-1.0, 2.0*p.y);}"+
//        "vec2 f1(vec2 p){return vec2(2.0*p.x, 2.0*p.y);}"+
//        "vec2 f2(vec2 p){return vec2(2.0*p.x, 2.0*p.y-1.0);}"+
//        "vec2 f3(vec2 p){return vec2(2.0*p.x-1.0, 2.0*p.y);}"+
        `float speedMotion=${sM};\n`+
        `float speedNorm=${sN};\n`+
        `float speedColorStyle=${sC};\n`+
        "void main(){\n"+
        "vec2 position = gl_FragCoord.xy / uResolution.xy;\n"+
        "highp float u = position.x;\n"+
        "highp float v = position.y;\n"+
         `tx = (${sRX} * (u-0.5) + ${xC});\n`+
        `ty = (${sRY} * (v-0.5) + ${yC});\nx=tx; y=ty;\n`+
//        `${motion}`+
        `for (int i = 0; i<=${depthIter}; i++){\n`+
        `if(i == ${depthIter} && areaCond(x, y)){gl_FragColor=vec4(cos(x), sin(y),1.0,.0);}\n`+
        "else {"+name+"gl_FragColor=vec4(0.0,0.0, 0.0,1.0);break;"+
//            "if(areaCond(1.53*x+2.37*y, 1.37*y-2.0*x)){newX=1.53*x+2.37*y; newY=1.37*y-2.0*x; x=newX; y=newY; continue;}"+
//            "if(areaCond(2.53*x+2.37*y-1.0, 2.37*y-1.53*x-1.0)){newX=2.53*x+2.37*y-1.0; newY=2.37*y-1.53*x-1.0; x=newX; y=newY; continue;}"+
//            "newX=1.53*x+2.37*y; newY=1.37*y-2.0*x, x=newX; y=newY;gl_FragColor=vec4(0.0,1.0, 0.0,1.0);"+
        "}\n"+
//        "else {if(areaCond(f1(P))){P=f1(P); continue;}; if(areaCond(f2(P))){P=f2(P); continue;}; if(areaCond(f3(P))){P=f3(P); continue;}else{P=f1(P);gl_FragColor=vec4(0.0,0.0, 0.0,1.0);}}"+
        "};"+
    "}";
//    console.log('shader = ', shaderSource, scaleRange);
    return shaderSource;
};

/**
 * Функция для компиляции шейдеров
 * params:
 * gl - контекст канваса,
 * shaderSource - текст шейдера,
 * shaderType - тип шейдера
 */
export const compileShader = (gl: any, shaderSource: string, shaderType: any): any => {
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
export const createShaderProgram = (gl: any, fragmentShader: any, vertexShader: any): any => {
    const shaderProgram = gl.createProgram(); // создали шейдерную программу в конвеере
    gl.attachShader(shaderProgram, vertexShader);//закидываем в неё скомпилинные шейдеры
    gl.attachShader(shaderProgram, fragmentShader);//закидываем в неё скомпилинные шейдеры
    gl.linkProgram(shaderProgram);//слинковываем программу
    gl.useProgram(shaderProgram);
    if (gl.getError()) {
        return false;
    }
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
        timeLocation: any, 
        time: number, 
        resolutionLocation: any, 
        resolution: number[],
    ): any => {
        gl.uniform1f(timeLocation, time);
        gl.uniform2fv(resolutionLocation, resolution);
        gl.drawArrays(gl.TRIANGLES, 0, 12);
};

/**
 * Функция рендера фрактала
 * params:
 * canvas - ссылка на канвас,
 * fractal - параметры фрактала
 */
export const render = (canvas: HTMLCanvasElement, fractal: IFractal): void => {
    let fragmentShaderSourse;
    switch (fractal.typeFractal){
        case 'complex': fragmentShaderSourse = fragmentShaderSourceComplex(fractal); break;
        case 'ifs': fragmentShaderSourse = fragmentShaderSourceIFS(fractal); break;
        default: fragmentShaderSourse = fragmentShaderSourceComplex(fractal); break;
    }
    const gl = canvas.getContext("webgl");
    if (!gl) return;
    const fragmentShader = compileShader(gl, fragmentShaderSourse, gl.FRAGMENT_SHADER);
    const vertexShader = compileShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
    const shaderProgram = createShaderProgram(gl, fragmentShader, vertexShader);
    const resolution = [canvas.width, canvas.height];
    const resolutionLocation = gl.getUniformLocation(shaderProgram, "uResolution");
    const timeLocation = gl.getUniformLocation(shaderProgram, "uTime");
    const vertexPositionLocation = gl.getAttribLocation(shaderProgram, "aVertexPosition");
    bufferVertices(gl, vertices);
    gl.enableVertexAttribArray(vertexPositionLocation);
    gl.vertexAttribPointer(vertexPositionLocation, 2, gl.FLOAT, false, 0, 0);
    const time = fractal.startTime ? fractal.startTime / 150 : 1;
    drawScene(gl, timeLocation, time, resolutionLocation, resolution);
};


