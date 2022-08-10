import styled from 'styled-components';

export const ContainerNav = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ContentNav = styled.div`
    width: 100%;
    height: 10.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 3.2rem 16rem;
`
export const LogoNav = styled.div`

`
export const CartLocalNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`
export const LocalNav = styled.button`
    display: flex;
    align-items: center;
    gap: 1rem;
    
    width: 14.3rem;
    height: 3.8rem;
    padding: .8rem;
    border: none;
    border-radius: 8px;

    background: var(--purple-light);
    color: var(--purple-dark);
    font-size: 1.4rem;
    font-weight: 400;

    transition: all ease-in .2s;

    &:hover{
        filter: brightness(0.9);
    }
`
export const CartNav = styled.div`

`