import React from 'react';
import { CardWrapper, CardImage, CardHeader, CardText, CardIcon, CardDescription } from './Card.elements';
import { Flex } from './../Common/Flex';
import Icon from './../Common/Icon';
import Heart from './../../images/Heart.svg';
import Level from './../../images/Level.svg';


const Card = ({ img, header, text, alt, degree, scaleX, scaleY }) => {
    return (
        <CardWrapper>
            <Flex justify='space-around' align='flex-start'>
                <CardImage src={img} alt={alt} degree={degree} scaleX={scaleX} scaleY={scaleY} />
                <Flex direction='column' justify='space-between' align='center'>
                    <Icon src={Level} alt='Level icon' width='18px' height='19px' marginTop='12px' />
                    <CardIcon />
                    <Icon src={Heart} alt='Heart icon' width='16px' height='14px' />
                </Flex>
            </Flex>
            <CardDescription>
                <CardHeader>{header}</CardHeader>
                <CardText>{text}</CardText>
            </CardDescription >
        </CardWrapper>
    )
}

export default Card
