import React, { useState } from "react";
import styled from "styled-components";

const MainLogo = styled.img.attrs(props => ({
  src: props.changeImg
}))``;

const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: var(--fz-large);
`;

const Header = () => {
    const [changeImg, setChangeImg] = useState("");
  return (
    <HeaderContainer className="wrap">
      <MainLogo changeImg={changeImg}/>
      {/* 제목 */}
      <Title>2023 커비의 당근심기</Title>
      {/* 닉네임같은거 */}
    </HeaderContainer>
  );
};

export default Header;
