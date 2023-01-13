import React, { useState , useEffect } from "react";
import styled from "styled-components";
import LogoDefault from '../img/LogoDefault.png'
import Logo1 from '../img/Logo1.png'
import Logo2 from '../img/Logo2.png'
import Logo3 from '../img/Logo3.png'

const MainLogo = styled.img.attrs(props => ({
  src: props.changeImg
}))`
  width: 80px;
  height: 80px;
`;

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



const Header = ({userInfo}) => {
  const [changeImg, setChangeImg] = useState(LogoDefault);
  useEffect(() => {
    if(userInfo.length ===0){
      setChangeImg(LogoDefault)
    }
    else if(userInfo[0].contentLst.length <=3){
      setChangeImg(Logo1)
    }else if(userInfo[0].contentLst.length <=6){
      setChangeImg(Logo2)
    }else if(userInfo[0].contentLst.length <=9){
      setChangeImg(Logo3)
    }
  }, [userInfo])
  return (
    <div className="wrap">
      <HeaderContainer>
        <MainLogo changeImg={changeImg} />
        {/* 제목 */}
        <Title>2023 커비의 당근심기</Title>
        {/* 닉네임같은거 */}
      </HeaderContainer>
    </div>
  );
};

export default Header;
