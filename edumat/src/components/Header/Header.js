import React, { useState } from 'react';
import { HeaderDiv, HeaderLogo, HeaderIconDiv, HeaderFilter, HeaderFilterButton } from './Header.elements';
import Search from './../../images/Search.png';
import Logo from './../../images/Logo.png';
import Notifications from './../../images/Notifications.svg';
import Overlap from './../../images/Overlap.svg';
import Icon from './../Common/Icon';

const Header = () => {
    const [isActive, setActive] = useState(true);
    return (
        <>
            <HeaderDiv>
                <HeaderLogo src={Logo} alt='Logo company' />
                <HeaderIconDiv >
                    <Icon src={Search} alt='Search icon' width='15' height='15' />
                    <Icon src={Overlap} alt='Overlap icon' />
                    <Icon src={Notifications} alt='Notification icon' />
                </HeaderIconDiv>
            </HeaderDiv>
            <HeaderFilter>
                <HeaderFilterButton isActive={isActive}>Summary</HeaderFilterButton>
                <HeaderFilterButton>Activity</HeaderFilterButton>
            </HeaderFilter>
        </>
    )
}

export default Header;
