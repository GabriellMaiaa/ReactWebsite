import React from 'react'
import  { InfoSec } from './InfoSection.elements'
import { Container } from '../../globalStyles' //Importando o Container do GlobalStyles, onde dá para reutilizar em todo canto
import { InfoColumn, InfoRow, TextWrapper } from './InfoSection.elements'
import { Link } from 'react-router-dom'

const InfoSection = ({ lightBg, imgStart }) => {
  return (
    <>
      <InfoSec lightBg = {lightBg}>
        <Container>
            <InfoRow imgStart={imgStart}>
             <InfoColumn>
                <TextWrapper>
                   <TopLine lightTopLine={lightTopLine}>
                        {topLine}
                   </TopLine>
                   <Heading lightText ={lightText}>{headLine}</Heading>
                     <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                     <Link to='/sign-up'>
                        <Button big fontBig primary={primary}>{buttonLabel}</Button>
                     </Link>
                </TextWrapper>
             </InfoColumn>
            </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}

export default InfoSection
