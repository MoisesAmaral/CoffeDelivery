import styled from 'styled-components';

export const ContainerNav = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--black);
`
export const ContentNav = styled.div`
    width: 100%;
    height: 8.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 3.2rem 20rem;

    @media (max-width: 1300px) {
        padding: 3.2rem 10rem;
    }
    @media (max-width: 998px) {
        padding: 3.2rem 5rem;
    }
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

    background: var(--purple);
    color: var(--white);
    font-size: 1.4rem;
    font-weight: 400;

    transition: all ease-in .2s;

    &:hover{
        filter: brightness(0.9);
    }
`
export const CartNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--yellow-light);

    width: 3.8rem;
    height: 3.8rem;
    padding: .8rem;
    border-radius: 8px;
    cursor: pointer;

    transition: all .2s;

    &:hover{
        background: var(--yellow);

        svg{
        fill: var(--white);
    }
    }
    
`
export const CartNavCounter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -2rem;
    margin-left: -3rem;

    width: 2rem;
    height: 2rem;

    font-size: 1.4rem;
    font-weight: 600;
    color: var(--purple);
    background: var(--white);

    border: solid 2px var(--purple);
    border-radius: 50%;
    padding: .5rem;

    transition: all ease-in .2s;
`