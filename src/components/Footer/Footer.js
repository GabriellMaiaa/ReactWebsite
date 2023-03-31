import React from 'react'
import { Button } from '../../globalStyles.js'
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, FormInput, Form, 
  FooterLinksContainer, FooterLinkWrapper, FooterLinksItems, FooterLinksTitle, FooterLink } from './Footer.elements.js'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
            Junte-se a nossa comunidade exclusiva, com novidades e atualizações!
        </FooterSubHeading>
        <FooterSubText>
            Você pode cancelar o plano a qualquer momento.
        </FooterSubText>
        <Form>
            <FormInput name='email' type='email' placeholder='email'/>
                <Button big>Se inscreva</Button>
        </Form>
      </FooterSubscription>
        <FooterLinksContainer>
            <FooterLinkWrapper>
                <FooterLinksItems>
                    <FooterLinksTitle>Sobre nós</FooterLinksTitle>
                    <FooterLink to='/sign-up'>Teste</FooterLink>
                    <FooterLink to='/avaliações'>Teste</FooterLink>
                    <FooterLink to='/Investidores'>Teste</FooterLink>
                    <FooterLink to='/termos de serviço'>Teste</FooterLink>
                </FooterLinksItems>
                <FooterLinksItems>
                    <FooterLinksTitle>Contate-nos</FooterLinksTitle>
                    <FooterLink to='/sign-up'>Teste</FooterLink>
                    <FooterLink to='/avaliações'>Teste</FooterLink>
                    <FooterLink to='/Investidores'>Teste</FooterLink>
                    <FooterLink to='/termos de serviço'>Teste</FooterLink>
                </FooterLinksItems>
                <FooterLinksItems>
                    <FooterLinksTitle>Vídeos</FooterLinksTitle>
                    <FooterLink to='/sign-up'>Teste</FooterLink>
                    <FooterLink to='/avaliações'>Teste</FooterLink>
                    <FooterLink to='/Investidores'>Teste</FooterLink>
                    <FooterLink to='/termos de serviço'>Teste</FooterLink>
                </FooterLinksItems>
                <FooterLinksItems>
                    <FooterLinksTitle>Redes Sociais</FooterLinksTitle>
                    <FooterLink to='/sign-up'>Teste</FooterLink>
                    <FooterLink to='/avaliações'>Teste</FooterLink>
                    <FooterLink to='/Investidores'>Teste</FooterLink>
                    <FooterLink to='/termos de serviço'>Teste</FooterLink>
                </FooterLinksItems>
            </FooterLinkWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>
              <SocialIcon/>
              ULTRA
            </SocialLogo>
            <WebsiteRights>ULTRA © 2023</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' aria-label='Facebook'>
                <FaFacebook/>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
