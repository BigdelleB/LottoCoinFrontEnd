import React, { useEffect } from 'react'
import { Container, Spacer } from 'react-neu'

import Page from 'components/Page'
import HomeHeader from './components/HomeHeader'

const Home = (props: { title: string }) => {
  useEffect(() => {
    document.title = props.title
  }, [props.title])

  return (
    <Page>
      <Container size='lg'>
        <HomeHeader />
        <Spacer size='lg' />
      </Container>
    </Page>
  )
}

export default Home
