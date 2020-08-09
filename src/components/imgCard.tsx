import React from 'react';
import { A } from 'hookrouter';

interface IProps {
    name?: string;
    src?: string;
    link?: string;
}

const ImgCard: React.FC<IProps> = props => {
    const data = {...props};
    return (
        <div className="card">
            <div className="card-image">
                <img src={data.src} alt={data.name}/>
                <span className="card-title">{data.name}</span>
            </div>
            <div className="card-action">
                <a href={data.link}>Перейти на холст</a>
            </div>
        </div>
    );
}

export default ImgCard;