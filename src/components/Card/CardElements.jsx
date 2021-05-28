import styled from 'styled-components'
import {primaryColor,primaryDarkColor,sucessColor,detailColor} from '../../config/colors'
import {NavLink} from 'react-router-dom'

export const CardContainer = styled.div`
max-width: 1200px;
height: 100%;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(auto-fill ,minmax(315px,1fr));
grid-gap: 20px ;
padding: 20px;
`;


export const CardWrapper = styled.div`
    width: 320px;
    height: 320px;
    margin-right: 10px;
    border: 1px solid ${detailColor};
    box-sizing: border-box;
    border-radius: 6px;
    position: relative;
`;
export const CardTitle = styled.div`
    border-bottom: 1px solid ${detailColor};
    height: 45px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

 h3{
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    text-transform: uppercase;
    margin-left: 20px;
    color: ${primaryColor};
    
 }   
`;

export const DescriptionWrapper = styled.div`
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 24px;
    top: 70px;
p{
    color: ${primaryDarkColor};
    font-size: 18px;
    line-height: 22px;
}
span{
    color: ${sucessColor};
    position: static;
    width: 200px;
    height: 20px;
    left: 0.5px;
    top: 82px;
    margin-top: 16px;
}
`;

export const IconService = styled.div`
    position: absolute;
    right: 30px;
    top: 70px;
    width: 50px;
    height: 50px;
`;

export const Icon = styled.img`
    width: 50px;
    height: 50px;
    color: #E29B11;

`;
export const InfoService = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    left: 24px;
    top: 68%;
    bottom: 24%;

span{
    color: ${primaryColor};
    text-transform: uppercase;
    font-size: 12px;
    margin-left: 5px;


}
p{
    color: ${primaryDarkColor};
    font-size: 18px;
    
}    
`;



export const Button = styled(NavLink)`
    border: none;
    outline: none;
    text-decoration: none;
    position: absolute;
    right: 24px;
    top: 68%;
    bottom: 22%;
    background-color:${sucessColor};
    border-radius: 6px;
    color: #fff;
    padding: 8px 16px;
    font-weight: 500;
    font-size: 16px;
    height: 35px;
    cursor: pointer;
    transition: 0.8s ease;

    &:hover{
        border: 1px solid ${sucessColor};
        color: ${sucessColor};
        background-color: transparent;
    }

    &:focus{
        outline: none;
    }



`;
export const CardFooter = styled.div`
    position: absolute;
    bottom: 0;
    border-top: 1px solid ${detailColor};
    height: 45px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    h3{
    font-weight: normal;
    font-size: 18px;
    line-height: 14px;
    margin-left: 20px;
    color: ${primaryColor};
 }      
`;


export const ButtonLink = styled.button`
border: 1px solid ${sucessColor};
outline: none;
text-decoration: none;
border-radius: 6px;
color: ${sucessColor};
padding:  16px;
font-weight: 500;
font-size: 16px;
height: 50px;
width: 230px;
cursor: pointer;
display: inline-block;
transition-duration:0.8s;
background-color: transparent;
&:hover{
    border: none;
    background-color: ${sucessColor};
    color: #fff;

}
`;