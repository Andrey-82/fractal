import React from 'react';
import { IFractal } from '../utils/types';
import { fractals, motions, colorStyles, norms } from '../utils/dataFractals';
import { Fractal } from '../utils/classes'
const { Select, Checkbox, Range } = require('react-materialize');

const Navigator: React.FC<IFractal> = (props) => {
    const { 
        name,
        norm,
        colorStyle,
        scaleRange,
        motion,
        speedMotion,
        speedNorm,
        speedColorStyle,
        xCenter,
        yCenter,
        animated,
        changeName, 
        changeNorm, 
        changeColor,
        changeScaleRange,
        changeMotion,
        changeSpeedMotion,
        changeSpeedNorm,
        changeSpeedColorStyle,
        changeXCenter, 
        changeYCenter,
        toggleAnimated, 
    } = props;
    
    return (
        <div className="col m5 l3">
            <Select onChange={changeName} defaultValue={name} s={12}>
                <option disabled value=""> Выберите фрактал </option>
                {Fractal.renderOptions(fractals)}
            </Select>
            <Select onChange={changeNorm} defaultValue={norm} s={12}>
                <option disabled value=""> Выберите норму </option>
                {Fractal.renderOptions(norms)}
            </Select>
            <Select onChange={changeColor} defaultValue={colorStyle} s={12}>
                <option disabled value=""> Выберите раскраску </option>
                {Fractal.renderOptions(colorStyles)}
            </Select>
            <div className="input-field col s6">
                <input type="number" step="0.01" onChange={changeXCenter} value={xCenter}/>
                <label>X центра</label>
            </div>
            <div className="input-field col s6">
                <input type="number" step="0.01" onChange={changeYCenter} value={yCenter}/>
                <label>Y центра</label>
            </div>
            <div className="input-field col s12">
                <input type="number" step="0.01" min="0.01" onChange={changeScaleRange} value={scaleRange}/>
                <label>Масштаб</label>
            </div>
            <div className="input-field col s12 static">
                <Checkbox label="Анимация" value="move" checked={false} onChange={toggleAnimated}/>
            </div>
            <Select onChange={changeMotion} s={12} disabled={!animated} defaultValue={motion}>
                <option disabled value=""> Выберите тип анимации </option>
                {Fractal.renderOptions(motions)}
            </Select>
            <div className="input-field col s9 top-label">
                <Range onChange={changeSpeedMotion} max="10" min="-10" step="0.1" disabled={!animated} value={speedMotion}/>
                <label>V<sub>motion</sub></label>
            </div>
            <div className="input-field col s3">
                <h5 className="range-field center">{speedMotion}</h5>
            </div>
            <div className="input-field col s9 top-label">
                <Range onChange={changeSpeedNorm} max="10" min="-10" step="0.1" disabled={!animated} value={speedNorm}/>
                <label>V<sub>norm</sub></label>
            </div>
            <div className="input-field col s3">
                <h5 className="range-field center">{speedNorm}</h5>
            </div>
            <div className="input-field col s9 top-label">
                <Range onChange={changeSpeedColorStyle} max="10" min="-10" step="0.1" disabled={!animated} value={speedColorStyle}/>
                <label>V<sub>color</sub></label>
            </div>
            <div className="input-field col s3">
                <h5 className="range-field center">{speedColorStyle}</h5>
            </div>
        </div>
    );
}

export default Navigator;
