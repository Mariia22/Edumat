import React from 'react';
import { Flex } from './../Common/Flex';
import { FooterWrapper } from './Footer.elements';
import Icon from './../Common/Icon';
import AddIcon from './../../images/footerImages/AddIcon.svg';
import CouseIcon from './../../images/footerImages/CouseIcon.svg';
import HomeIcon from './../../images/footerImages/HomeIcon.svg';
import MenuIcon from './../../images/footerImages/MenuIcon.svg';
import TestIcon from './../../images/footerImages/TestIcon.svg';

const Footer = () => {
    return (
        <FooterWrapper>
            <Flex justify='center'>
                <Icon src={HomeIcon} alt='Home icon' width='28px' height='28px' marginRight='50px' />
                <Icon src={CouseIcon} alt='Couse icon' width='28px' height='28px' marginRight='50px' />
                <Icon src={AddIcon} alt='Add icon' width='28px' height='28px' marginRight='50px' />
                <Icon src={TestIcon} alt='Test icon' width='28px' height='28px' marginRight='50px' />
                <Icon src={MenuIcon} alt='Menu icon' width='28px' height='28px' />
            </Flex>
        </FooterWrapper>
    )
}

export default Footer
