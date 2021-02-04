import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Container } from 'react-neu'
import { useTheme } from 'react-neu'

import Page from 'components/Page'

const About = (props: { title: string }) => {
  useEffect(() => {
    document.title = props.title
  }, [props.title])

  const { darkMode } = useTheme()

  return (
    <Page>
      <Container size='lg'>
        <Section>
          <div>
            <AboutTitle>
              Creating The Next Generation Of
              <HighlightedHeader> Lottery</HighlightedHeader>
            </AboutTitle>
          </div>
        </Section>
        <Section>
          <div>
            <SectionSubTitle>Who We Are</SectionSubTitle>
            <SectionTitle>
              Thinkers, Writers, Builders, and Do-ers.
            </SectionTitle>
            <Description>
              Our mission is to lead by example, showing what the best parts of
              the digital asset space can look like. We want to take our
              community and build something together that challenges the status
              quo in legacy finance, doing it all with a set of values centred
              around fairness and trust.
            </Description>
          </div>
        </Section>
        <CenteredSection>
          <SectionSubTitle>Join Us</SectionSubTitle>
          <SectionTitle>Come Join The Community</SectionTitle>
          <LargeDescription>
            Say hi on the Discord and forum, and join our passionate community
            building the future of finance.
          </LargeDescription>
          <ButtonContainer>
            <ButtonLink
              href=''
              target='_blank'
              rel='noopener'
              style={{ marginRight: '30px' }}
            >
              <Button>
                <ButtonImg
                  src={
                    darkMode
                      ? 'https://index-dao.s3.amazonaws.com/discord.png'
                      : 'https://index-dao.s3.amazonaws.com/discord_light.png'
                  }
                  alt='Discord logo'
                />
                <ButtonText>Discord</ButtonText>
              </Button>
            </ButtonLink>
          </ButtonContainer>
        </CenteredSection>
      </Container>
    </Page>
  )
}

const Section = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    font-size: 36px;
    flex-direction: column;
    justify-content: center;
  }
`

const CenteredSection = styled.div`
  text-align: center;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    font-size: 36px;
    flex-direction: column;
    justify-content: center;
  }
`

const AboutTitle = styled.p`
  font-size: 72px;
  font-weight: 600;
  line-height: 1.1;
  @media (max-width: 768px) {
    font-size: 66px;
  }
`

const HighlightedHeader = styled.span`
  font-size: 72px;
  line-height: 1.1;
  color: #a9a7ff;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 66px;
  }
`

const SectionTitle = styled.p`
  font-size: 48px;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 48px;
    margin-top: 20px;
  }
`

const SectionSubTitle = styled.p`
  font-size: 24px;
  display: inline;
  line-height: 1.1;
  padding-bottom: 5px;
  border-bottom: 3px solid #a9a7ff;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const Description = styled.p`
  font-size: 24px;
  line-height: 1.4;
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 40px;
  }
`

const LargeDescription = styled.p`
  font-size: 32px;
  line-height: 1.4;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`

const ButtonLink = styled.a`
  text-decoration: none;
`

const Button = styled.div`
  cursor: pointer;
  height: 124px;
  width: 124px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #a9a7ff;
  padding: 30px;
  border-radius: 8px;
  transition: 0.2s;
  @media (max-width: 768px) {
    font-size: 20px;
    height: 90px;
    width: 90px;
  }
  &:hover {
    transform: scale(1.05);
  }
`

const ButtonImg = styled.img`
  width: 60px;
  @media (max-width: 768px) {
    font-size: 20px;
    width: 45px;
  }
`

const ButtonText = styled.p`
  color: #a9a7ff;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 0;
`

export default About
