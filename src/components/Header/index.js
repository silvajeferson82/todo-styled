import React from 'react';
import {HeaderApp, Title, Span} from './style';

const Header = () => {

    const d = new Date();

    return(
        <HeaderApp>
            <Title>Minha Lista</Title>
            <Span>{`Data: ${d.getDay()}/${d.getMonth()+1}/${d.getFullYear()}`}</Span>
        </HeaderApp>
    );
}

export default Header;