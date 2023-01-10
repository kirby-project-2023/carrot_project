import React from 'react'
import styled from 'styled-components'

const CopyRights = styled.footer`
  text-align:center;
`

function Footer() {
  return (
    <CopyRights>Copyright 2023. kirby_project all rights reserved. <br/> Contributors</CopyRights>
  )
}

export default Footer