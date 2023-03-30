import styled from "styled-components";

export const FooterContainer = styled.div `
    background-color: #101522;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 0 2rem 0;
`
export const FooterSubscription = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom:24px ;
    color: white;
`
export const FooterSubHeading = styled.p `
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', Arial, sans-serif;
    margin-bottom: 24px;
    font-size: 24px;
`

export const FooterSubText = styled.p `
    margin-bottom: 24px;
    font-size: 20px;
`
export const Form = styled.form `
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        width: 80%;
    }
`
export const FormInput = styled.input `
    padding: 10px 20px;
    border: 1px solid #fff;
    border-radius: 4px;
    outline: none;
    border: none;
    font-size: 16px;
    margin-right: 10px;

    &::placeholder {
        color: #242424;
    }

    @media screen and (max-width:820px) {
        margin: 0 0 16px 0;
    }
`