import React from 'react';
const { Select, Checkbox, Range } = require('react-materialize');

const Navigator: React.FC = () => {
    return (
        <div className="col m5 l3">
            <Select onChange={function noRefCheck(){}} value="" s={12}>
                <option disabled value=""> Выберите фрактал </option>
                <option value="1"> Фрактал 1 </option>
                <option value="2"> Фрактал 2 </option>
                <option value="3"> Фрактал 3 </option>
            </Select>
            <Select onChange={function noRefCheck(){}} value="" s={12}>
                <option disabled value=""> Выберите метрику </option>
                <option value="1"> метрика 1 </option>
                <option value="2"> метрика 2 </option>
                <option value="3"> метрика 3 </option>
            </Select>
            <Select onChange={function noRefCheck(){}} value="" s={12}>
                <option disabled value=""> Выберите раскраску </option>
                <option value="1"> раскраска 1 </option>
                <option value="2"> раскраска 2 </option>
                <option value="3"> раскаска 3 </option>
            </Select>
            <div className="input-field col s12">
                <input type="number" step="0.01" />
                <label>X Координата центра</label>
            </div>
            <div className="input-field col s12">
                <input type="number" step="0.01" />
                <label>Y Координата центра</label>
            </div>
            <div className="input-field col s12 static">
                <Checkbox label="Анимация" value="move"/>
            </div>
            <Select onChange={function noRefCheck(){}} value="" s={12}>
                <option disabled value=""> Выберите тип анимации </option>
                <option value="1"> тип 1 </option>
                <option value="2"> тип 2 </option>
                <option value="3"> тип 3 </option>
            </Select>
            <div className="input-field col s12 top-label">
                <Range max="10" min="-10" step="0.1" defaultValue="1"/>
                <label>Скорость для фрактала</label>
            </div>
            <div className="input-field col s12 top-label">
                <Range max="10" min="-10" step="0.1" defaultValue="1"/>
                <label>Скорость для метрики</label>
            </div>
            <div className="input-field col s12 top-label">
                <Range max="10" min="-10" step="0.1" defaultValue="1"/>
                <label>Скорость для раскраски</label>
            </div>
        </div>
    );
}

export default Navigator;
