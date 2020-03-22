import React, { useState } from 'react';
import { IFractal } from '../utils/types';
import { A } from 'hookrouter';
const { Button, Icon } = require('react-materialize');

interface IState {
    x: string,
    y: string,
    norm: string,
    r: string,
    g: string,
    b: string,
    motion: string,
}

const initState: IState = {
    x: '',
    y: '',
    norm: '',
    r: '',
    g: '',
    b: '',
    motion: '',
};

const OwnFractal: React.FC<IFractal> = ({name, norm, colorStyle, motion, clickApplyButton}) => {
    
    const [params, setParams] = useState(initState);
    const handleChangeParam = (param: string) => (e: any) => setParams({...params, [param]: e.target.value});
    const handleClearParam = (param: string) => () => setParams({...params, [param]: ''});
    
    const hadleClickApplyParams = () => {
        let ownName: string | undefined = 'newX=' + params.x.replace(/\s+/g,'') + ';' + 'newY=' + params.y.replace(/\s+/g,'') + ';';
        let ownNorm: string | undefined = params.norm.replace(/\s+/g,'') + ';';
        let ownColorStyle: string | undefined = 'r=' + params.r.replace(/\s+/g,'') + ';'
            +'g=' + params.g.replace(/\s+/g,'') + ';' + 'b=' + params.b.replace(/\s+/g,'') + ';';
        let ownMotion: string | undefined = params.motion.replace(/\s+/g,'') + ';';
        ownName.length < 7 && (ownName = name);
        ownNorm.length < 7 && (ownNorm = norm);
        ownColorStyle.length < 10 && (ownColorStyle = colorStyle);
        ownMotion.length < 9 && (ownMotion = motion);console.log(name, norm, colorStyle, motion);
        clickApplyButton && clickApplyButton(ownName, ownNorm, ownColorStyle, ownMotion);
    }
    
    return (
        <>
            <div className="row ownFractal">
                <div className="col s12">
                    <h6 className="center">Задать свои параметры( <A href="/painting/rules">подробнее...</A> )</h6>
                </div>
                <div className="col s12 m3">
                    <p className="center">Фрактал</p>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="x" className="materialize-textarea" onChange={handleChangeParam('x')} value={params.x}></textarea>
                            <i className="material-icons tiny" onClick={handleClearParam('x')}>clear</i>
                            <label htmlFor="x"> x = {params.x}</label>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="y" className="materialize-textarea" onChange={handleChangeParam('y')} value={params.y}></textarea>
                            <i className="material-icons tiny" onClick={handleClearParam('y')}>clear</i>
                            <label htmlFor="y"> y = {params.y}</label>
                        </div>
                    </div>
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
            <Button large node="a" style={{margin: '5px', float: 'right'}} waves="light" onClick={hadleClickApplyParams}>
                Применить
            </Button>
        </>
    );
}

export default OwnFractal;