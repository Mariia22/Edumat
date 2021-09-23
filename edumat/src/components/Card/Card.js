import React from 'react';
import { CardWrapper, CardImage, CardHeader, CardText } from './Card.elements';
//import cardImage from './../../images/imageCard.png';


const Card = ({ img, header, text, alt }) => {
    return (
        <CardWrapper>
            <CardImage src={img} alt={alt} />
            <CardHeader>{header}</CardHeader>
            <CardText>{text}</CardText>
        </CardWrapper>
    )
}

export default Card
