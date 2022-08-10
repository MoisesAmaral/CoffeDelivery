import {ContainerNav,
        ContentNav,
        CartLocalNav,
        LogoNav,
        LocalNav,
        CartNav
    } from './stylesNavbar'
    import { ShoppingCart } from 'phosphor-react'
    import Logo from '../../assets/logo.svg'
    import Location from  '../../assets/images/location.svg'

export function Navbar(){
    return(
        <ContainerNav>
            <ContentNav>
                <LogoNav>
                    <img src={Logo} alt="Logo do Coffe Delivery" />                 
                </LogoNav>
                <CartLocalNav>
                    <LocalNav>
                        <img src={Location} alt="" /> Ipatinga, MG
                    </LocalNav>
                    <CartNav>
                        <ShoppingCart size={32} />
                    </CartNav>
                </CartLocalNav>
            </ContentNav>
        </ContainerNav>
    )
}