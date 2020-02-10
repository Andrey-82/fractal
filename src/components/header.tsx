import React from 'react';
import { A } from 'hookrouter';

const Header: React.FC = () => (
    <nav>
        <div className="nav-wrapper purple darken-4">
            <A href="/" className="brand-logo">Фракталы</A>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><A href="/">Главная</A></li>
                <li><A href="/gallery">Галерея</A></li>
                <li><A href="collapsible.html">404</A></li>
            </ul>
        </div>
    </nav>
    );
export default Header;