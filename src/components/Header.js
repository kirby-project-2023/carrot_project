import React, { useState } from 'react';
import styled from 'styled-components'

const MainLogo = styled.img.attrs(props=>({
    src: props.chageImg
}))`
    /* contentLst 길이 이용해서 로고 이미지 src 바꾸기 */
    
`
const HeaderContainer = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    font-size: var(--fz-large);
`

const Header = () => {
    const [chageImg, setChangeImg] = useState("/")
    return (
        <HeaderContainer className='wrap'>
        {/* 로고 */}
        <MainLogo chageImg={chageImg}></MainLogo>
        {/* 제목 */}
        <Title>2023 커비의 당근심기</Title>
        {/* 닉네임같은거 */}
        </HeaderContainer>
    )
};


export default Header;