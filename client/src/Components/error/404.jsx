import React from 'react'
import styled from 'styled-components'
import { SearchButton as BackButton } from '../SearchBar/SBStyles'
import { Link } from 'react-router-dom'

const Img= styled.img`
margin-top: 30px;
`

const H1= styled.h1`
  font-family: 'Press Start 2P', cursive;
`

export const Error404 = () => {
  return (
    <div>
        <Img src="https://1.bp.blogspot.com/-uSsJZo7F52E/Uu7Va-shO_I/AAAAAAAAA48/sZusyE_D0Is/s1600/pikachu+gameboy+confused.gif" alt="" />
        <H1>404 - Nothing here to show...</H1>
        <Link to="/home"><BackButton>Back Home</BackButton></Link>

        
        </div>
  )
}
