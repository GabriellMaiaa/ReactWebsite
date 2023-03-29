import React from 'react'
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText } from './Footer.elements.js'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
            Junte-se a nossa comunidade exclusiva, com novidades e atualizações
        </FooterSubHeading>
        <FooterSubText>
            Você pode cancelar o plano a qualquer momento
        </FooterSubText>
      </FooterSubscription>
    </FooterContainer>
  )
}

export default Footer
