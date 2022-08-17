import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/PriceFormat";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  ContainerProducts,
  ContentProducts,
  ProductsDivImg,
  ProductsLi,
  ProductsType,
  ProductsTitle,
  ProductsinfoDiv,
  ProductsPrice,
  ProductsPriceSpan,
  ProductsPriceStrong,
  ProductsQuantity,
  ProductsQuantityButton,
  ProductsQuantitySpan,
  ProductsShoppingCart,
  ProductsSubtitle,
  ProductsImg,
  ProductsUl,
  ProductsFooter,
  ProductsH2,
} from "./stylesProducts";

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  category2: string;
  category3: string;
  price: number;
  UrlImg: string;
}
interface ProductFormatted extends Product {
  priceFormatted: string;
}


export function Products() {
  const [products, setProducts] = useState<ProductFormatted[]>([]);

  // useEffect(() => {
  //   api.get("products")
  //   .then((response) => {
  //     setProducts(response.data)})
  //   .catch((error) => {
  //     console.log('ops! ocorreu um erro: ' + error);
  //   }
  //   );
  // }, []);


  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<Product[]>("products");

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <>
      <ContainerProducts>
        <ContentProducts>
          <ProductsH2>Nossos Cafés</ProductsH2>
          <ProductsUl>
            {products.map(product =>(                
                <ProductsLi key={product.id}>
                  <ProductsDivImg>
                    <ProductsImg src={product.UrlImg} alt="" />
                    <ProductsType>{product.category}</ProductsType>
                  </ProductsDivImg>
                  <ProductsinfoDiv>
                    <ProductsTitle>{product.name}</ProductsTitle>
                    <ProductsSubtitle>
                      {product.description}
                    </ProductsSubtitle>
                  </ProductsinfoDiv>
                  <ProductsFooter>
                    <ProductsPrice>
                      <ProductsPriceSpan>
                        <ProductsPriceStrong>{product.priceFormatted}</ProductsPriceStrong>
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
                </ProductsLi>
              ))}
          </ProductsUl>
        </ContentProducts>
      </ContainerProducts>
    </>
  );
}
