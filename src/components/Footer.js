import React from 'react'
import styled from 'styled-components'

const CopyRights = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  text-align: center;
  color: var(--white);
  @media (max-width: 768px){
    font-size: var(--fz-md);
  }
`;

function Footer() {
  return (
    <CopyRights><p>Copyright 2023. kirby_project all rights reserved.</p><a href='https://github.com/kirby-project-2023' target='_blank'>visit github</a></CopyRights>
  )
}

export default Footer