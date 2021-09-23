import React from 'react';
import { HeaderDiv, HeaderLogo } from './Header.elements';
import Logo from './../../images/Logo.png';

const Header = () => {
    return (
        <>
            <HeaderDiv>
                <HeaderLogo src={Logo} alt='Logo company' />
            </HeaderDiv>
        </>
    )
}

export default Header;
