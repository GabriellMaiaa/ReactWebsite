import React from 'react'
import  { InfoSec } from './InfoSection.elements'
import { Container } from '../../globalStyles' //Importando o Container do GlobalStyles, onde dá para reutilizar em todo canto

const InfoSection = ({ lightBg }) => {
  return (
    <>
      <InfoSec lightBg = {lightBg}>
        <Container>
            <InfoRow imgStart={imgStart}>
             <InfoColumn>
                <TextWrapper></TextWrapper>
             </InfoColumn>
            </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}

export default InfoSection
