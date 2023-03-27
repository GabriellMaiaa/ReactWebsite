import React from 'react'
import  { InfoSec } from './InfoSection.elements'
import { Button, Container } from '../../globalStyles' //Importando o Container do GlobalStyles, onde dá para reutilizar em todo canto
import { InfoColumn, InfoRow, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img } from './InfoSection.elements'
import { Link } from 'react-router-dom'

const InfoSection = ({ lightBg, imgStart, lightTopLine, lightTextDesc, lightText , description, topLine
, headLine, primary, buttonLabel, start, img, alt}) => {
  return (//Parou em 1h30min e 30s
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
            <InfoColumn>
                <ImgWrapper start={start}>
                    <Img src={img} alt={alt}/>
                </ImgWrapper>
            </InfoColumn>
            </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}

export default InfoSection
