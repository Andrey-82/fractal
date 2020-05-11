import React, { useState, useEffect } from 'react';
import { IFractal } from '../utils/types';
import { vertexShaderSource, fragmentShaderSourceComplex, fragmentShaderSourceIFS, compileShader, createShaderProgram } from '../utils/webgl';
import { A } from 'hookrouter';
const { Button, Icon } = require('react-materialize');

interface IState {
    x: string[],
    y: string[],
    norm: string,
    r: string,
    g: string,
    b: string,
    motion: string,
}

/** Пользовательские настройки */
const initState: IState = {
    x: [''],
    y: [''],
    norm: '',
    r: '',
    g: '',
    b: '',
    motion: '',
};

const OwnFractal: React.FC<IFractal> = (props) => {
    const {name, norm, colorStyle, motion, clickApplyButton, typeFractal} = props;
    const [params, setParams] = useState(initState);
    const [classes, setClasses] = useState('hide');
    useEffect(() => {
        setParams(initState);
    }, [typeFractal])
    
    /**
     * Функция проверки компилируемости фрагментного шейдера
     * fractal - объект параметров фрактала
     */
     const isCompileFragmentShader = (fractal: IFractal): boolean => {
         const canvas = document.createElement('canvas');
         const gl = canvas.getContext('webgl');
         let fragmentShaderSource = fragmentShaderSourceComplex;
         typeFractal === 'ifs' && (fragmentShaderSource = fragmentShaderSourceIFS);
         let isCompile: boolean = true;
         if (gl) {
             const fs = compileShader(gl, fragmentShaderSource(fractal), gl.FRAGMENT_SHADER);
             const vs = compileShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
             isCompile = !!createShaderProgram(gl, fs, vs);
         }
         canvas.remove();
         return isCompile;
     };
    
    /**
     * Обработчик изменения пользовательских настроек параметров фрактала
     * param - тип параметра
     * e - объект события
     */
    const handleChangeParam = (param: string) => (e: any) => setParams({...params, [param]: e.target.value});
    const handleChangeParamXY = (param: 'x' | 'y', i: number) => (e: any) => {
        const newParam = [...params[param]];
        newParam[i] = e.target.value;
        setParams({...params, [param]: newParam});
    }
    
    /**
     * Обработчик очищения пользовательских настроек параметров фрактала
     * param - тип параметра
     */
    const handleClearParam = (param: string) => () => setParams({...params, [param]: ''});
    const handleClearParamXY = (param: 'x' | 'y', i: number) => () => {
        const newParam = [...params[param]];
        newParam[i] = '';
        setParams({...params, [param]: newParam});
    }
    
    /**
     * Обработчик добавления полей для записи формул фрактала
     */
    const handleAddParamsXY = () => {
        const newParamX = [...params.x];
        newParamX.push('');
        const newParamY = [...params.y];
        newParamY.push('');
        setParams({...params, x: newParamX, y: newParamY});
    }
    
    /**
     * Обработчик удаления полей для записи формул фрактала
     * i - номер элемента в массиве
     */
    const handleDeleteParamsXY = (i: number) => () => {
        const newParamX = [...params.x];
        const newParamY = [...params.y];
        newParamX.splice(i, 1);
        newParamY.splice(i, 1);
        setParams({...params, x: newParamX, y: newParamY});
    }
    
    /**
     * Рендер полей для записи формул фрактала
     */
    const renderFieldsXY = params.x.map((item, i) => <div className="row" key={i}>
                        <div className="input-field col s12">
                            <textarea id="x" className="materialize-textarea" onChange={handleChangeParamXY('x', i)} value={params.x[i]}></textarea>
                            <i className="material-icons tiny" onClick={handleClearParamXY('x', i)}>clear</i>
                            <label htmlFor="x"> x = {params.x[i]}</label>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="y" className="materialize-textarea" onChange={handleChangeParamXY('y', i)} value={params.y[i]}></textarea>
                            <i className="material-icons tiny" onClick={handleClearParamXY('y', i)}>clear</i>
                            <label htmlFor="y"> y = {params.y[i]}</label>
                        </div>
                        {typeFractal === 'ifs' && params.x.length > 1 && 
                            <Button 
                                className="white right"
                                style={{marginRight: '30px'}}
                                small icon={<Icon className="teal-text">close</Icon>}
                                waves="teal"
                                onClick={handleDeleteParamsXY(i)}
                            />}
                    </div>
    )
    
    
    /** Обработчик установки пользовательских настроек параметров фрактала */
    const hadleClickApplyParams = () => {
        let ownName: string | undefined = '';
        if(typeFractal === 'complex') ownName = 'newX=' + params.x[0].replace(/\s+/g,'') + '; newY=' + params.y[0].replace(/\s+/g,'') + ';';
        if(typeFractal === 'ifs') {
            params.x.forEach((item, i) => {
                ownName += `if(areaCond(${params.x[i]}, ${params.y[i]})){newX=${params.x[i]}; newY=${params.y[i]}; x=newX; y=newY; continue;}\n`;
            });
        }
        let ownNorm: string | undefined = params.norm.replace(/\s+/g,'');
        let ownColorStyle: string | undefined = 'r=' + params.r.replace(/\s+/g,'') + ';'
            +'g=' + params.g.replace(/\s+/g,'') + '; b=' + params.b.replace(/\s+/g,'') + ';';
        let ownMotion: string | undefined = params.motion+ ';';
        (ownName.length < 14 || (params.x[0].replace(/\s+/g,'').length) < 1 || (params.y[0].replace(/\s+/g,'').length) < 1) && (ownName = name);
        ownNorm.length < 2 && (ownNorm = norm);
        ownColorStyle.length < 12 && (ownColorStyle = colorStyle);
        ownMotion.length < 2 && (ownMotion = motion);
        const fractal = {
            ...props, 
            name: ownName, 
            norm: ownNorm, 
            colorStyle: ownColorStyle, 
            motion: ownMotion, 
        };
        if (!isCompileFragmentShader(fractal)) {
            setClasses('red lighten-5 black-text');
            setTimeout(() => setClasses('hide'), 2000);
            return;
        }
        
        clickApplyButton && clickApplyButton(ownName, ownNorm, ownColorStyle, ownMotion);
    }
    
    return (
        <div className="col s12">
            <div className="row ownFractal">
                <div className="col s12">
                    <h6 className="center">Задать свои параметры( <A href="/painting/rules">подробнее...</A> )</h6>
                </div>
                <div className="col s12 m3">
                    <p className="center">Фрактал</p>
                    {renderFieldsXY}
                    {typeFractal === 'ifs' && <Button large floating icon={<Icon>add</Icon>} waves="light" onClick={handleAddParamsXY} />}
                </div>
                <div className="col s12 m3">
                    <p className="center">Норма</p>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="norm" className="materialize-textarea" onChange={handleChangeParam('norm')} value={params.norm}></textarea>
                            <i className="material-icons tiny" onClick={handleClearParam('norm')}>clear</i>
                            <label htmlFor="norm"> norm = {params.norm}</label>
                        </div>
                    </div>
                </div>
                <div className="col s12 m3">
                    <p className="center">Раскраска</p>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="r" className="materialize-textarea" onChange={handleChangeParam('r')} value={params.r}></textarea>
                            <i className="material-icons tiny" onClick={handleClearParam('r')}>clear</i>
                            <label htmlFor="r"> r = {params.r}</label>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="g" className="materialize-textarea" onChange={handleChangeParam('g')} value={params.g}></textarea>
                            <i className="material-icons tiny" onClick={handleClearParam('g')}>clear</i>
                            <label htmlFor="g"> g = {params.g}</label>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="b" className="materialize-textarea" onChange={handleChangeParam('b')} value={params.b}></textarea>
                            <i className="material-icons tiny" onClick={handleClearParam('b')}>clear</i>
                            <label htmlFor="b"> b = {params.b}</label>
                        </div>
                    </div>
                </div>
                <div className="col s12 m3">
                    <p className="center">Анимация</p>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="motion" className="materialize-textarea" onChange={handleChangeParam('motion')} value={params.motion}></textarea>
                            <i className="material-icons tiny" onClick={handleClearParam('motion')}>clear</i>
                            <label htmlFor="motion"> motion = {params.motion}</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s8 m9 l10">
                    <h5 className={"right " + classes}>
                        Не валидный код фрагментного шейдера
                    </h5>
                </div>
                <Button large node="a" style={{margin: '5px', float: 'right'}} waves="light" onClick={hadleClickApplyParams}>
                    Применить
                </Button>
            </div>
        </div>
    );
}

export default OwnFractal;