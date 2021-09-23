import styled from 'styled-components';
import DropdownIcon from './../../images/DropdownIcon.svg';

export const DropdownStyle = styled.select`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  padding: 13px 13px 13px 16px;
  border: 2px solid #EFEFEF;
  width: 118px;
  height: 48px;
  background-color: ${props => props.theme.colors.backgroundColor};
  border-radius: 16px;
  appearance: none;
  background-image: url(${DropdownIcon});
  background-repeat: no-repeat;
  background-position: right 8px center;
`

export const MenuItem = styled.option`
  color: ${props => props.theme.colors.headerColor};
`