import styled from 'styled-components'
import { Container } from '../../globalStyles'

export const Nav = styled.nav `
    background-color: #101522;
    height: 80px;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 1.2rem;
    top: 0;
    z-index: 999;
    position: sticky;
    &:hover {
        
    }
`
export const NavbarContainer = styled(Container) `
    display: flex;
    justify-content: space-between;
    height: 80px 0;

    ${Container}
`