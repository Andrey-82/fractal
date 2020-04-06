import React from 'react';
import { A } from 'hookrouter';
const { Navbar, Icon } = require('react-materialize');

const Header: React.FC = () => (
<Navbar 
    alignLinks="right"
    brand={<A href="/" className="brand-logo">Фракталы</A>}
    menuIcon={<Icon>menu</Icon>}
    className="blue-grey darken-3"
>
    <A href="/">Главная</A>
    <A href="/gallery">Галерея</A>
    <A href="/painting">Холст</A>
    <A href="/contacts">Контакты</A>
</Navbar>
    );
export default Header;