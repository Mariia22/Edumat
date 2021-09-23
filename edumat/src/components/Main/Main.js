import React from 'react';
import { MainWrapper, MainForm, MainHeader, MainFormSearch } from './Main.elements';
import Input from './../Common/Input';
import { DropdownStyle, MenuItem } from './../Common/Dropdown';

const Main = () => {
    return (
        <MainWrapper>
            <MainHeader>Zapisane kursy</MainHeader>
            <MainForm>
                <MainFormSearch>
                    <Input type='text' placeholder='Jakiego kursu szukasz?' search />
                    <DropdownStyle>
                        <MenuItem selected='true' disabled>Poziom</MenuItem>
                    </DropdownStyle>
                </MainFormSearch>
            </MainForm>
        </MainWrapper>
    )
}

export default Main
