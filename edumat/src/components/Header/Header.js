import React, { useState } from 'react';
import { HeaderDiv, HeaderLogo, HeaderIconDiv, HeaderFilter } from './Header.elements';
import Search from './../../images/Search.png';
import Logo from './../../images/Logo.png';
import Notifications from './../../images/Notifications.svg';
import Overlap from './../../images/Overlap.svg';
import Icon from './../Common/Icon';
import Button from './../Common/Button';

const Header = () => {
    const [isFilter, setFilter] = useState(true);
    return (
        <>
            <HeaderDiv>
                <HeaderLogo src={Logo} alt='Logo company' />
                <HeaderIconDiv >
                    <Icon src={Search} alt='Search icon' width='15px' height='15px' />
                    <Icon src={Overlap} alt='Overlap icon' marginLeft='22px' marginRight='17px' />
                    <Icon src={Notifications} alt='Notification icon' />
                </HeaderIconDiv>
            </HeaderDiv>
            <HeaderFilter>
                <Button filterCourse isFilter={isFilter}>Summary</Button>
                <Button filterCourse>Activity</Button>
            </HeaderFilter>
        </>
    )
}

export default Header;
