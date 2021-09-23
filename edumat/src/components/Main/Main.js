import React, { useState } from 'react';
import { MainWrapper, MainForm, MainHeader } from './Main.elements';
import Input from './../Common/Input';
import { DropdownStyle, MenuItem } from './../Common/Dropdown';
import { Flex } from './../Common/Flex';
import Button from '../Common/Button';
import Card from '../Card/Card';
import { cards } from './../../Mock'

const Main = () => {
    const [isActive, setActive] = useState(true);
    return (
        <MainWrapper>
            <MainHeader>Zapisane kursy</MainHeader>
            <MainForm>
                <Flex>
                    <Input type='text' placeholder='Jakiego kursu szukasz?' search />
                    <DropdownStyle>
                        <MenuItem selected={true} disabled>Poziom</MenuItem>
                    </DropdownStyle>
                </Flex>
                <Flex justify='flex-start'>
                    <Button filter='true' isActive={isActive}>Do zrobienia</Button>
                    <Button filter='true' marginLeft='10px ' marginRight='10px'>W trakcie</Button>
                    <Button filter='true'>Wykonane</Button>
                </Flex>
            </MainForm>
            <Flex wrap='wrap'>
                {cards.map(card => <Card {...card} key={card.id} />)}
            </Flex>
        </MainWrapper>
    )
}

export default Main
