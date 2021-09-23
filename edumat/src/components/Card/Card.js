import React from 'react';
import { CardWrapper, CardImage, CardHeader, CardText, CardIcon } from './Card.elements';
import { Flex } from './../Common/Flex';
import Icon from './../Common/Icon';
import Heart from './../../images/Heart.svg';
import Level from './../../images/Level.svg';


const Card = ({ img, header, text, alt, id }) => {
    return (
        <CardWrapper>
            <Flex>
                <CardImage src={img} alt={alt} />
                <Flex direction='column' align='center' justify='center'>
                    <Icon src={Level} alt='Level icon' width='18px' height='19px' />
                    <CardIcon />
                    <Icon src={Heart} alt='Heart icon' width='16px' height='14px' />
                </Flex>
            </Flex>
            <CardHeader>{header}</CardHeader>
            <CardText>{text}</CardText>
        </CardWrapper>
    )
}

export default Card
