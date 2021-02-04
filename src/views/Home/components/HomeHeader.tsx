import React from 'react'
import styled from 'styled-components'

const Home: React.FC = () => {
  return (
    <div>
      <HomeTitle>L O T T O</HomeTitle>
      <TitleContent>The world's first decentralized lottery game</TitleContent>
    </div>
  )
}

const HomeTitle = styled.p`
  font-size: 72px;
  line-height: 1.2;
  text-align: center;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`

const TitleContent = styled.p`
  font-size: 36px;
  line-height: 1;
  color: #03c75e;
  font-weight: 600;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export default Home
