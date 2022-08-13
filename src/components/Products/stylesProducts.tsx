import styled from 'styled-components';

export const ContainerProducts = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ContentProducts = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 3.2rem 20rem;

`
export const ProductsH2 = styled.h2`   
    font-family: 'Baloo 2', sans-serif;
    font-size: 3.2rem;
    line-height: 3.2rem;
    font-weight: 800;
    color: var(--base-subtitle);
    margin-bottom: 8rem;    
`
export const UlProducts = styled.ul`
margin-bottom: 50rem;
    
`
export const LiProducts = styled.li`
    width: 25.6rem;
    height: 31rem;
    border-radius: .6rem 3.2rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: var(--base-card); ;
`
export const ProductsDivImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ProductsImg = styled.img`
    width: 12rem;
    height: 12rem;
    
    position: relative;
    top: -2rem;

`
export const ProductsType = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .6rem 1rem;
    border-radius: 10rem;
    background: var(--yellow-light);

    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.3rem;
    color: var(--yellow-dark);
`
export const ProductsinfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin-top: 1.6rem;
`
export const ProductsTitle = styled.h2`
    font-size: 2rem;
    line-height: 1.3rem;
    font-weight: 700;
    font-family: 'Baloo 2', sans-serif;    
    color: var(--base-subtitle);
`
export const ProductsSubtitle = styled.p`
    margin: .8rem 2rem;
    font-size: 1.4rem;
    line-height: 1.3rem;
    font-weight: 400;
    color: var(--base-label);
    text-align: center;
`
export const ProductsFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 3.3rem;
`
export const ProductsPrice = styled.div`
`
export const ProductsPriceSpan = styled.span`
    font-size: 1.4rem;
    line-height: 1.3rem;
    font-weight: 400;
    color: var(--base-text);
`
export const ProductsPriceStrong = styled.strong`
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 3.12rem;
    font-size: 2.4rem;
    text-align: right;
`
export const ProductsQuantity = styled.div`
    width: 7.2rem;
    height: 3.8rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: .8rem;
    gap: 1rem;
    background: var(--base-button);

    border-radius: .6rem;
`
export const ProductsQuantityButton = styled.button`   
    background: transparent;
    border: none;
    color: var(--purple-dark);
    align-items: center;

    &:hover {
        color: var(--purple);
    }
`
export const ProductsQuantitySpan = styled.span`
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.08rem;

    color: var(--base-title);
`
export const ProductsShoppingCart = styled.div`
    width: 3.8rem;
    height: 3.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--purple-dark);

    cursor: pointer;
    transition: all .2s;

    &:hover {
        background: var(--purple);
    }

    border-radius: .6rem;
`
