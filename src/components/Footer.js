import React from 'react'
import styled from 'styled-components'

const CopyRights = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  text-align: center;
  color: var(--white);
  @media (max-width: 768px){
    font-size: var(--fz-sm);
  }
`

function Footer() {
  return (
    <CopyRights>Copyright 2023. kirby_project all rights reserved. <br/> Contributors</CopyRights>
  )
}

export default Footer