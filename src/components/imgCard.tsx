import React from 'react';
import { A, useQueryParams } from 'hookrouter';

interface IProps {
    name?: string;
    src?: string;
    link?: string;
    hash?: string;
}

const ImgCard: React.FC<IProps> = props => {
    const data = {...props};
    const [params, setParams] = useQueryParams();
    return (
        <div className="card">
            <div className="card-image">
                <img src={data.src} alt={data.name}/>
                <span className="card-title">{data.name}</span>
            </div>
            <div className="card-action" onClick={() => {setParams({hash: data.hash})}}>
                <A href={data.link || '/'}>Перейти на холст</A>
            </div>
        </div>
    );
}

export default ImgCard;