import styled from 'styled-components';

export const ContainerCheckout = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ContentCheckout = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-gap: 1.6rem;
    grid-template-columns: 2fr 1.5fr;
    padding: 3.2rem 20rem;

    margin-top: 2rem;

    @media (max-width: 1300px) {
        padding: 3.2rem 10rem;
    }
    @media (max-width: 998px) {
        padding: 3.2rem 5rem;
    }
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`
export const CheckoutAddress = styled.div`
    max-width: 75rem;
    height: 100%;    
`
export const CheckoutH1 = styled.h1`
    font-family: 'Baloo 2', sans-serif;
    font-size: 2.2rem;
    line-height: 3.2rem;
    font-weight: 800;
    margin-bottom: 2rem;
`
export const CheckoutDiv = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: right;

    background: var(--base-card);
    padding: 4rem;
    border-radius: 0.8rem;
`
export const CheckoutAddressDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap:1rem;
    margin-bottom: 3.2rem;
`
export const CheckoutAddressP = styled.p`
    color: var(--base-subtitle);
    font-size: 1.6rem;

    span{
        font-size: 1.4rem;
        font-weight: 400;
        color: var(--base-text);
    }
`
export const CheckoutImg = styled.img`
`
export const CheckoutForm = styled.form`
    width:100%;
`
export const CheckoutFormDiv1 = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`
export const CheckoutformCep = styled.input`
    width: 20rem;
    height: 4.2rem;
    color: var(--base-label);
`
export const CheckoutformRua = styled.input`
color: var(--base-label);
`
export const CheckoutFomDiv2 = styled.div`
    display: flex;
    gap: 1.6rem;    
`
export const CheckoutformNumero = styled.input`
    width: 20rem;   
    color: var(--base-label); 
`
export const CheckoutformComplemento = styled.input`
    width: 100%;
    color: var(--base-label);
`
export const CheckoutFomDiv3 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.6rem;
`
export const CheckoutformBairro = styled.input`
    width: 20rem;
    color: var(--base-label);
`
export const CheckoutformCidade = styled.input`
    width: 100%;
    color: var(--base-label);
`
export const CheckoutformEstado = styled.input`
    width: 10rem;
    color: var(--base-label);
`

export const CheckoutPayment = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: right;

    background: var(--base-card);
    padding: 4rem;
    margin-top: 1.6rem;
    border-radius: 0.8rem;
`

export const CheckoutPaymentDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap:1rem;
    margin-bottom: 3.2rem;
`
export const CheckoutPaymentP = styled.p`
color: var(--base-subtitle);
    font-size: 1.6rem;

    span{
        font-size: 1.4rem;
        font-weight: 400;
        color: var(--base-text);
    }
`
export const CheckoutPaymentDivButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 1.6rem;

    button{
        display: flex;
        align-items: center;
        justify-content: left;
        gap: 1rem;

        min-width: 18rem;
        height: 5.1rem;
        padding: 1.6rem 1rem 1.6rem 1rem;

        border-radius: 0.6rem;
        background: var(--base-button);
        color: var(--base-text);
        font-size:1.2rem;
        line-height:1.9rem;
        font-weight: 400;
        text-transform:uppercase;
        border: none;
        cursor: pointer;
        transition: all 0.2s;

        &:hover{
            background: var(--base-hover);
        }  

    }

    .active{
        background: var(--purple-light);
        border: solid 1px var(--purple);
    }

`
export const CheckoutCart = styled.div`
    max-width: 75rem;
    height: 100%;
`
export const CheckoutCartContent = styled.div`
    width: 100%;
    max-height: 140rem; 
    background: var(--base-card);
    padding: 4rem;
    border-radius: .6rem 4.4rem;
`
export const CheckoutCartList = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const CheckoutCartListItem = styled.li`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: left;

    padding-bottom: 2.4rem;
    margin-bottom: 1.6rem;
    border-bottom: solid 2px var(--base-button);

`
export const CheckoutCartListItemImg = styled.div`
    img{
        width: 6.4rem;
        height: 6.4rem;
    }
`
export const CheckoutCartListItemDiv = styled.div`
`
export const CheckoutCartListItemDivButtons = styled.div`
`
export const CheckoutCartListItemDivPrice = styled.button`
`

    
export const CheckoutCartNoItens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem;

    p{
        color: var(--base-text);
        font-size: 1.8rem;
        font-weight: 700;
        line-height: 2.8rem;

        margin-bottom: 5rem;
            
    }
    
    button{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px 8px;
        gap: 4px;
        border-radius: 0.6rem;
        border: none;
        background: var(--yellow);
        color: var(--white);
        font-size:1.4rem;
        line-height:2.2rem;
        font-weight: 700;
        text-transform:uppercase;
        cursor: pointer;
        transition: all 0.2s;



        &:hover{
            background: var(--yellow-dark);
        } 
    }

`


