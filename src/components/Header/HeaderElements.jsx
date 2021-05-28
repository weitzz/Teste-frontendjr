import styled from 'styled-components'
import {primaryColor,primaryDarkColor,sucessColor} from '../../config/colors'

export const HeaderContainer = styled.header`
    height: 100px;
    width: 100%;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  
`;


export const Title = styled.h2`
    
    color: ${primaryDarkColor};
    font-size: 24px;
    line-height: 32px;
    font-weight: 400;
`;
export const ContainerCheckBox = styled.div`
    label{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
span{
    color: ${primaryColor};
    padding-right: 8px;
}

input[type='checkbox']{
    position: relative;
    width: 35px;
    height: 20px;
    appearance: none;
    background-color: ${primaryColor};
    outline: none;
    border-radius: 20px;
    box-shadow: inset 0 0 2px rgba(0,0,0,.2);
    transition: .5s;
}

input:checked[type='checkbox']{
    
    background-color: ${sucessColor};
}

input[type='checkbox']:before{
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    top: 0;
    left: 0;
    background-color: #fff;
    transform:  scale(1.1);
    transition: .5s;
    box-shadow: 0 2px 5px rgba(0,0,0,.2);
}

input:checked[type='checkbox']:before{
    left: 15px;
}


`;
