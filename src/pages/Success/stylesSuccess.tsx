import styled from "styled-components";

export const ContainerSuccess = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ContentSuccess = styled.div`
    width: 100%;
    height: auto;
    padding: 3.2rem 20rem;
    margin-top: 8rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    
`
export const DivSuccessRight = styled.div`
    display: flex;
    flex-direction: column;
`
export const DivSuccessh1 = styled.h1`
    font-family: "Baloo 2", sans-serif;
    font-size: 3.2rem;
    line-height: 4.16rem;
    font-weight: 800;
    color: var(--yellow-dark);
`
export const DivSuccessP = styled.p`
    font-size: 20px;
    line-height: 1.3rem;
    font-weight: 400;
    color: var(--base-subtitle);
    margin: 1.6rem 0 3rem 0;


`
export const DivSuccessAddress = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    
    padding: 1px;
    border-radius: 0.8rem 3.6rem;
    
    position: relative;
    background: linear-gradient(to right, var(--yellow-dark), var(--purple));
`
export const DivSuccessAddressModule = styled.div`
    background: var(--white);
    padding: 4rem;
    border-radius: 0.8rem 3.6rem;

`
export const DivSuccessAddressDiv = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1.5rem;

    padding: 1rem;
    margin-bottom: 3.2rem;    
`
export const DivSuccessAddressImg1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    background: var(--purple);
`
export const DivSuccessAddressImg2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    background: var(--yellow);
`
export const DivSuccessAddressImg3 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    background: var(--yellow-dark);
`
export const DivSuccessAddressText = styled.div`
    p{
        font-size: 1.6rem;
        line-height: 1.6rem;
        font-weight: 400;
        color: var(--base-subtitle);

        span{
            font-weight: 800;
        }
    }
`
export const DivSuccessLeft = styled.div`
    display: flex;
    flex-direction: column;    
    justify-content: center;
`
export const DivSuccessImg = styled.img`
    width: 100%;

`