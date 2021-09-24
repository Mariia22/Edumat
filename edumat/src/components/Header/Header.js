import React, { useState } from 'react';
import { HeaderDiv, HeaderLogo, HeaderFilter } from './Header.elements';
import { Flex } from './../Common/Flex';
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
                <Flex justify='flex-end' align='center' wrap='wrap' >
                    <Icon src={Search} alt='Search icon' width='18px' height='18px' />
                    <Icon src={Overlap} alt='Overlap icon' marginLeft='23px' marginRight='18px' />
                    <Icon src={Notifications} alt='Notification icon' marginRight='3px' />
                </Flex>
            </HeaderDiv>
            <HeaderFilter>
                <Button filterCourse isFilter={isFilter}>Summary</Button>
                <Button filterCourse>Activity</Button>
            </HeaderFilter>
        </>
    )
}

export default Header;
