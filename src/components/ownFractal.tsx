import React, { useState } from 'react';
import { A } from 'hookrouter';
const { Button } = require('react-materialize');

interface IState {
    x?: string | number,
    y?: string | number,
    metric?: string,
    r?: string | number,
    g?: string | number,
    b?: string | number,
    move?: string,
}
const initState: IState = {};

const OwnFractal: React.FC = () => {
    
    const [params, setParams] = useState(initState);
    
    const handleChangeParam = (param: string) => (e: any) => setParams({...params, [param]: e.target.value});
    
    return (
        <>
            <div className="row">
                <div className="col s12">
                    <h6 className="center">Задать свои параметры( <A href="/painting/rules">подробнее...</A> )</h6>
                </div>
                <div className="col s12 m3">
                    <p className="center">Фрактал</p>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="x" className="materialize-textarea" onChange={handleChangeParam('x')}></textarea>
                            <label htmlFor="x"> x = {params.x}</label>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="y" className="materialize-textarea" onChange={handleChangeParam('y')}></textarea>
                            <label htmlFor="y"> y = {params.y}</label>
                        </div>
                    </div>
                </div>
                <div className="col s12 m3">
                    <p className="center">Метрика</p>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="metric" className="materialize-textarea" onChange={handleChangeParam('metric')}></textarea>
                            <label htmlFor="metric"> metric = {params.metric}</label>
                        </div>
                    </div>
                </div>
                <div className="col s12 m3">
                    <p className="center">Раскраска</p>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="r" className="materialize-textarea" onChange={handleChangeParam('r')}></textarea>
                            <label htmlFor="r"> r = {params.r}</label>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="g" className="materialize-textarea" onChange={handleChangeParam('g')}></textarea>
                            <label htmlFor="g"> g = {params.g}</label>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="b" className="materialize-textarea" onChange={handleChangeParam('b')}></textarea>
                            <label htmlFor="b"> b = {params.b}</label>
                        </div>
                    </div>
                </div>
                <div className="col s12 m3">
                    <p className="center">Анимация</p>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="move" className="materialize-textarea" onChange={handleChangeParam('move')}></textarea>
                            <label htmlFor="move"> move = {params.move}</label>
                        </div>
                    </div>
                </div>
            </div>
            <Button large node="a" style={{margin: '5px', float: 'right'}} waves="light">
                Применить
            </Button>
        </>
    );
}

export default OwnFractal;