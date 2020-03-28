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
export const vertexShaderSource = "attribute vec3 aVertexPosition;\n"+
    "void main(){gl_Position = vec4(aVertexPosition, 1.0);}";
 
/**
 *  Функция для составления фрагментного шейдера
 *  params:
 *  fractal - параметры фрактала
 */
export const fragmentShaderSource = (fractal: IFractal): string => {
    const {
        xCenter,
        yCenter,
        name,
        norm,
        scaleRange,
        scaleXtoY,
        motion,
        speedNorm,
        speedColorStyle,
        speedMotion,
    } = fractal;
    const sRX = scaleRange ? scaleRange.toFixed(2) + '' : '1.0';
    const sRY = scaleRange && scaleXtoY ? (scaleRange / scaleXtoY).toFixed(2) + '' : '1.0';
    const sM = speedMotion ? speedMotion.toFixed(2) + '' : '1.0';
    const sN = speedNorm ? speedNorm.toFixed(2) + '' : '1.0';
    const sC = speedColorStyle ? speedColorStyle.toFixed(2) + '' : '1.0';
    const xC = xCenter ? xCenter.toFixed(2) + '' : '0.0';
    const yC = yCenter ? yCenter.toFixed(2) + '' : '0.0';
    const shaderSource = "precision highp float; \n"+
        "const highp float PI = 3.14159265359; \n"+
        "uniform highp float uTime; uniform vec2 uResolution;\n"+
        "float tmp, newX, newY;\n"+
        "float speed=2.0;\n"+
        "float speedMotion="+sM+";\n"+
        "float speedNorm="+sN+";\n"+
        "float speedColorStyle="+sC+";\n"+
        "void main(){\n"+
        "vec2 position = gl_FragCoord.xy / uResolution.xy;\n"+
        "highp float x=0.0, newX=0.0;\n"+
        "highp float y=0.0, newY=0.0;\n"+
        "highp float z=0.0, newZ=0.0;\n"+
        "highp float u = position.x;\n"+
        "highp float v = position.y;\n"+
        "float tx = ("+sRX+" * 2.0*(u-0.5) + ("+xC+"));\n"+
        "float ty = ("+sRY+" * 2.0*(v-0.5) + ("+yC+"));\n"+
        "x=tx; y=ty;\n"+
        ""+motion+"\n"+
        "for (int i = 0; i<256; i++){\n"+
         "   "+name+" x=newX; y=newY;\n"+
          "  if ("+norm+"){\n"+
          "      float r, g, b;"+ fractal.colorStyle + "\n"+
          "      gl_FragColor=vec4(r,g,b,.0);break;\n"+
          "  } else {\n"+
          "      gl_FragColor=vec4(0.0,0.0, 0.0,1.0);\n"+
          "  };\n"+
        "};\n"+
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
    const gl = canvas.getContext("webgl",{preserveDrawingBuffer:true});
    if (!gl) return;
    const fragmentShader = compileShader(gl, fragmentShaderSource(fractal), gl.FRAGMENT_SHADER);
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


