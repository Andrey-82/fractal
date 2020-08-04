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
        `float speedMotion=${sM};\n`+
        `float speedNorm=${sN};\n`+
        `float speedColorStyle=${sC};\n`+
        "void main(){\n"+
        "vec2 position = gl_FragCoord.xy / uResolution.xy;\n"+
        "highp float u = position.x;\n"+
        "highp float v = position.y;\n"+
         `tx = (${sRX} * (u-0.5) + ${xC});\n`+
        `ty = (${sRY} * (v-0.5) + ${yC});\nx=tx; y=ty;\n`+
        `for (int i = 0; i<=${depthIter}; i++){\n`+
        `if(i == ${depthIter} && areaCond(x, y)){gl_FragColor=vec4(cos(x), sin(y),1.0,.0);}\n`+
        "else {"+name+"gl_FragColor=vec4(0.0,0.0, 0.0,1.0);break;"+
        "}\n"+
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
export const fragmentShaderSourceIFS3d = (fractal: IFractal): string => {
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
    const shaderSource = `precision highp float;
        const highp float PI = 3.14159265359;
        uniform highp float uTime; uniform vec2 uResolution;
        vec4 P, newP;float tmp, x, y, z, newX, newY, newZ,
        prevX, prevY, prevZ, tx, ty, tz;
        mat4 transform;
        bool flag = false;
        bool areaCond(float x, float y, float z){return (${norm});}
        float speedMotion=${sM};
        float speedNorm=${sN};
        float speedColorStyle=${sC};
        void main(){
        vec2 position = gl_FragCoord.xy / uResolution.xy;
        highp float u = position.x;
        highp float v = position.y;
        tx = (${sRX} * (u-0.5) + ${xC});
        ty = (${sRY} * (v-0.5) + ${yC});x=tx; y=ty;
        for (int i = 0; i <= 300; i++){
            if(flag == true){
                gl_FragColor=vec4(1.0-float(i)*0.0035, 1.0-float(i)*0.0035, 1.,.0);
                flag = false;
                break;
            }
            else{
                transform = mat4(
                    sin(uTime), 0.0, cos(uTime), 0.0,
                    0.0, 1.0, 0.0, 0.0,
                    cos(uTime), 0.0, -sin(uTime), 0.0,
                    0.0, 0.0, 0.0, 1.0
                );
                P = vec4(tx, ty, float(i)*0.01, 1.0);
                newP = transform * P;
                x = newP.x - 2.0*cos(uTime);
                y = newP.y;
                z = newP.z + 2.0*sin(uTime);
            }
            for (int j = 0; j <= ${depthIter}; j++){if(j == ${depthIter} && areaCond(x, y, z)){flag = true;}
            else {${name}gl_FragColor=vec4(0.0,0.0, 0.0,1.0);break;}
        }};
    }`;
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
        case 'ifs3d': fragmentShaderSourse = fragmentShaderSourceIFS3d(fractal); break;
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


