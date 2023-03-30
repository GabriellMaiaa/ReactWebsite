import React from 'react'
import { Button } from '../../globalStyles.js'
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, FormInput, Form } from './Footer.elements.js'

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
        <Form>
            <FormInput name='email' type='email' placeholder='email'>
                <Button big>Se inscreva</Button>
            </FormInput>
        </Form>
      </FooterSubscription>
    </FooterContainer>
  )
}

export default Footer
