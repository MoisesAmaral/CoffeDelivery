import {ContainerNav,
        ContentNav,
        CartLocalNav,
        LogoNav,
        LocalNav,
        CartNav,
        CartNavCounter
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
                        <ShoppingCart size={28} color="#c47f17" weight="fill" />
                    </CartNav>
                    <CartNavCounter>2</CartNavCounter>
                </CartLocalNav>
            </ContentNav>
        </ContainerNav>
    )
}