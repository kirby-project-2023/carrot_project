import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LogoDefault from '../img/LogoDefault.png'
import Logo1 from '../img/Logo1.png'
import Logo2 from '../img/Logo2.png'
import Logo3 from '../img/Logo3.png'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const MainLogo = styled.img.attrs(props => ({
  src: props.changeImg
}))`
  width: 80px;
  height: 80px;
`;

const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--white);
`;

const Title = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: var(--fz-large);
  word-break: keep-all;
  text-align: center;
`;

const Button = styled.button`
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: var(--fz-big);
  color: var(--white);
  :hover{
    cursor: pointer;
  }
`

const Header = ({ userInfo }) => {
  const [changeImg, setChangeImg] = useState(LogoDefault);
  useEffect(() => {
    if (userInfo.length === 0 || userInfo[0].contentLst === undefined) {
      setChangeImg(LogoDefault)
    }
    else if (userInfo[0].contentLst.length <= 4) {
      setChangeImg(Logo1)
    } else if (userInfo[0].contentLst.length <= 8) {
      setChangeImg(Logo2)
    } else if (userInfo[0].contentLst.length <= 12) {
      setChangeImg(Logo3)
    }
  }, [userInfo])
  const logoutHandler = () =>{
    localStorage.removeItem('userInfo')
    window.location.href = 'http://localhost:3000/'
  }
  const mypageURL = 'http://localhost:3000/mypage'
  console.log(userInfo)
  return (
    <HeaderContainer>
      <Link to="/"><MainLogo changeImg={changeImg} /></Link>
      <Title>
        {window.location.href === mypageURL ?`2023 ${userInfo[0].field} 달토끼네 당근밭` : `2023 커비의 당근심기`}
      </Title>
      {userInfo[0] === undefined ? null :
      (<Button onClick={logoutHandler}> 
          LOGOUT<FontAwesomeIcon icon={faRightFromBracket} />
      </Button>)}
      </HeaderContainer>
  );
};

export default Header;
