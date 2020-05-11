import React from 'react';

const Gallery: React.FC = () => {
    return (
        <div className="center" style={{height: '60vh'}}>
            <h4>Обо мне</h4>
            <ul>
                <li>Андрей</li>
                <li>г. Санкт-Петербург</li>
                <li>email: expandrey@mail.ru</li>
                <li>vk: <a href="https://vk.com/id6261088">https://vk.com/id6261088</a></li>
                <li>skype: trueman_82</li>
            </ul>
        </div>
    );
}

export default Gallery;
