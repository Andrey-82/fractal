import React from 'react';
import { IFractal } from '../utils/types';
const { Select, Checkbox, Range } = require('react-materialize');

const Navigator: React.FC<IFractal> = (props) => {
    const { 
        name,
        norm,
        colorStyle,
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
                <option value="1"> Фрактал 1 </option>
                <option value="2"> Фрактал 2 </option>
                <option value="3"> Фрактал 3 </option>
            </Select>
            <Select onChange={changeNorm} defaultValue={norm} s={12}>
                <option disabled value=""> Выберите норму </option>
                <option value="1"> норма 1 </option>
                <option value="2"> норма 2 </option>
                <option value="3"> норма 3 </option>
            </Select>
            <Select onChange={changeColor} defaultValue={colorStyle} s={12}>
                <option disabled value=""> Выберите раскраску </option>
                <option value="1"> раскраска 1 </option>
                <option value="2"> раскраска 2 </option>
                <option value="3"> раскаска 3 </option>
            </Select>
            <div className="input-field col s6">
                <input type="number" step="0.01" onChange={changeXCenter} value={xCenter}/>
                <label>X центра</label>
            </div>
            <div className="input-field col s6">
                <input type="number" step="0.01" onChange={changeYCenter} value={yCenter}/>
                <label>Y центра</label>
            </div>
            <div className="input-field col s12 static">
                <Checkbox label="Анимация" value="move" checked={false} onChange={toggleAnimated}/>
            </div>
            <Select onChange={changeMotion} s={12} disabled={!animated} defaultValue={motion}>
                <option disabled value=""> Выберите тип анимации </option>
                <option value="1"> тип 1 </option>
                <option value="2"> тип 2 </option>
                <option value="3"> тип 3 </option>
            </Select>
            <div className="input-field col s9 top-label">
                <Range onChange={changeSpeedMotion} max="10" min="-10" step="0.1" disabled={!animated} value={speedMotion}/>
                <label>Скорость анимации</label>
            </div>
            <div className="input-field col s3">
                <h5 className="range-field center">{speedMotion}</h5>
            </div>
            <div className="input-field col s9 top-label">
                <Range onChange={changeSpeedNorm} max="10" min="-10" step="0.1" disabled={!animated} value={speedNorm}/>
                <label>Скорость для нормы</label>
            </div>
            <div className="input-field col s3">
                <h5 className="range-field center">{speedNorm}</h5>
            </div>
            <div className="input-field col s9 top-label">
                <Range onChange={changeSpeedColorStyle} max="10" min="-10" step="0.1" disabled={!animated} value={speedColorStyle}/>
                <label>Скорость для раскраски</label>
            </div>
            <div className="input-field col s3">
                <h5 className="range-field center">{speedColorStyle}</h5>
            </div>
        </div>
    );
}

export default Navigator;
