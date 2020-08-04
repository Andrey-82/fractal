import React from 'react';
import {cards} from '../../utils/dataFractals';
import ImgCard from '../imgCard';

const Contacts: React.FC = () => {
    const imageCards = cards.map( data => (<div className="col s12 m4" key={data.link}>
                <ImgCard 
                    name={data.name}
                    src={data.src}
                    link={data.link}
                />
            </div>))
    return (
    <div className="row">
        <div className="col s1"></div>
        <div className="col s10">
            <h1>Галерея</h1>
            <h6>Раздел дорабатывается, сейчас в некоторых случаях при переходе 
                по ссылке на холст, могут возникать несоответствия, в зависимости
                от особенностей вашей видиокарты и разрешения экрана
            </h6>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {imageCards}
            </div>
        </div>
        <div className="col s1"></div>
    </div>
    );
}

export default Contacts;
