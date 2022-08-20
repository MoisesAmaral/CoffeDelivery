import {
  ContainerNav,
  ContentNav,
  CartLocalNav,
  LogoNav,
  LocalNav,
  CartNav,
  CartNavCounter,
} from "./stylesNavbar";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import Logo from "../../assets/logo.svg";
import Location from "../../assets/images/location.svg";

export function Navbar() {
  return (
    <ContainerNav>
      <ContentNav>
        <Link to={"/"}>
          <LogoNav>
            <img src={Logo} alt="Logo do Coffe Delivery" />
          </LogoNav>
        </Link>
        <CartLocalNav>
          <LocalNav>
            <img src={Location} alt="" /> Ipatinga, MG
          </LocalNav>
          <CartNav>
            <Link to="/checkout">
              <ShoppingCart size={24} color="#c47f17" weight="fill" />
            </Link>
          </CartNav>
          <CartNavCounter>2</CartNavCounter>
        </CartLocalNav>
      </ContentNav>
    </ContainerNav>
  );
}
