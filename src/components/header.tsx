import React from 'react';
import { A } from 'hookrouter';
const { Navbar, Icon, Dropdown, Button } = require('react-materialize');

const Header: React.FC = () => (
<Navbar 
    alignLinks="right"
    brand={<A href="/" className="brand-logo">Фракталы</A>}
    menuIcon={<Icon>menu</Icon>}
    className="blue-grey darken-3"
>
    <A href="/">Главная</A>
    <A href="/gallery">Галерея</A>
    <Dropdown
        options={{
            alignment: 'left',
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            coverTrigger: true,
            hover: false,
            inDuration: 150,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 250
        }}
        trigger={<a href="#">Холст<Icon right large>arrow_drop_down</Icon></a>}
    >
        <A href="/painting/complex">Комплексная динамика</A>
        <A href="/painting/ifs">Система итерируемых функций</A>
        <A href="/painting/ifs3d">Система итерируемых функций 3D</A>
    </Dropdown>
    <A href="/contacts">Контакты</A>
</Navbar>
    );
export default Header;