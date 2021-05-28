import React from 'react'
import {Title,HeaderContainer,ContainerCheckBox} from './HeaderElements'
const Header = () => {
    return (
        <HeaderContainer>
            <Title>Oportunidade em destaque</Title>
            <ContainerCheckBox>
                <label>
                <span>Geolocalização ativa</span>
                <input type="checkbox" />
                </label>
            </ContainerCheckBox>
        </HeaderContainer>
    )
}

export default Header
