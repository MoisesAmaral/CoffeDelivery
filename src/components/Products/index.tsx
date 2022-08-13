import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  ContainerProducts,ContentProducts,ProductsDivImg,
  LiProducts,ProductsType,ProductsTitle,ProductsinfoDiv,
  ProductsPrice,ProductsPriceSpan,ProductsPriceStrong,
  ProductsQuantity,ProductsQuantityButton,ProductsQuantitySpan,
  ProductsShoppingCart,ProductsSubtitle,ProductsImg, UlProducts, ProductsFooter, ProductsH2
} from "./stylesProducts";
import Coffee from "../../assets/images/americano.svg";

export function Products() {
  return (
    <ContainerProducts>
      <ContentProducts>
        <ProductsH2>Nossos Cafés</ProductsH2>
        <UlProducts>
          <LiProducts>
            <ProductsDivImg>
              <ProductsImg src={Coffee} alt="" />
              <ProductsType>TIPO DO CAFÉ</ProductsType>
            </ProductsDivImg>
            <ProductsinfoDiv>
              <ProductsTitle>Nome Cafe</ProductsTitle>
              <ProductsSubtitle>subtitulo do café, este café é muito bom</ProductsSubtitle>
            </ProductsinfoDiv>
            <ProductsFooter>
            <ProductsPrice>
              <ProductsPriceSpan>
                R$
                <ProductsPriceStrong>R$9,90</ProductsPriceStrong>
              </ProductsPriceSpan>
            </ProductsPrice>
            <ProductsQuantity>
              <ProductsQuantityButton>
                <Minus size={16} />
              </ProductsQuantityButton>
              <ProductsQuantitySpan>1</ProductsQuantitySpan>
              <ProductsQuantityButton>
                <Plus size={16} />
              </ProductsQuantityButton>
            </ProductsQuantity>
            <ProductsShoppingCart>
              <ShoppingCart size={28} color="#f3f2f2" weight="fill" />
            </ProductsShoppingCart>
            </ProductsFooter>
          </LiProducts>
        </UlProducts>
      </ContentProducts>
    </ContainerProducts>
  );
}
