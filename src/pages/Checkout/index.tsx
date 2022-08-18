import { apiCEP } from "../../services/api";
import { FocusEvent } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Navbar } from "../../components/Navbar";
import {
  CheckoutAddress,
  CheckoutAddressDiv,
  CheckoutAddressP,
  CheckoutCart,
  CheckoutCartList,
  CheckoutDiv,
  CheckoutForm,
  CheckoutFormDiv1,
  CheckoutFomDiv2,
  CheckoutformBairro,
  CheckoutformCep,
  CheckoutformCidade,
  CheckoutformComplemento,
  CheckoutformEstado,
  CheckoutformNumero,
  CheckoutformRua,
  CheckoutH1,
  CheckoutImg,
  ContainerCheckout,
  ContentCheckout,
  CheckoutFomDiv3,
  CheckoutPayment,
  CheckoutPaymentDiv,
  CheckoutPaymentP,
  CheckoutPaymentDivButton,
  CheckoutCartContent,
  CheckoutCartNoItens,
  CheckoutCartListItem,
  CheckoutCartListItemDiv,
  CheckoutCartListItemDivButtons,
  CheckoutCartListItemImg,
  CheckoutCartListItemDivPriceInfo,
  CheckoutCartQuantity,
  CheckoutCartQuantityButton,
  CheckoutCartQuantitySpan,
  CheckoutCartListItemDivPrice,
  CheckoutCartListTotal,
  CheckoutCartListTotalFinal,
  CheckoutCartListTotalProducts,
  CheckoutCartListTotalFrete,
} from "./stylesCkeckout";
import Location from "../../assets/images/iconlocation.svg";
import Icon$ from "../../assets/images/icon$.svg";
import IconCard from "../../assets/images/IconCard.svg";
import IconBanck from "../../assets/images/iconBanck.svg";
import IconDollar from "../../assets/images/IconDollar.svg";

import Coffee1 from "../../assets/images/products/1.svg";
import { Minus, Plus, Trash } from "phosphor-react";

type FormValues = {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;
  numero: string;
};

export function Checkout() {
  const { register, handleSubmit, setValue, setFocus } = useForm<FormValues>();

  const hendleCheckCep = (event: FocusEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.value.length === 8) {
      const cep = event.target.value;
      apiCEP.get(`${cep}/json/`).then((response) => {
        setValue("cep", response.data.cep);
        setValue("logradouro", response.data.logradouro);
        setValue("bairro", response.data.bairro);
        setValue("localidade", response.data.localidade);
        setValue("uf", response.data.uf);
        setFocus("numero");
      });
    } else {
      toast.error("Digite um CEP válido!");
    }
  };

  function onSubmit(data: FieldValues) {
    console.log(data);
  }

  return (
    <>
      <Navbar />
      <ContainerCheckout>
        <ContentCheckout>
          <CheckoutAddress>
            <CheckoutH1>Complete seu pedido</CheckoutH1>
            <CheckoutDiv>
              <CheckoutAddressDiv>
                <CheckoutImg src={Location} />
                <CheckoutAddressP>
                  Endereço de Entrega
                  <br />
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </CheckoutAddressP>
              </CheckoutAddressDiv>
              <CheckoutForm onSubmit={handleSubmit(onSubmit)}>
                <CheckoutFormDiv1>
                  <CheckoutformCep
                    type="text"
                    placeholder="CEP"
                    onBlur={hendleCheckCep}
                  />
                  <CheckoutformRua
                    type="text"
                    placeholder="Rua"
                    {...register("logradouro")}
                    disabled
                  />
                </CheckoutFormDiv1>

                <CheckoutFomDiv2>
                  <CheckoutformNumero
                    type="text"
                    placeholder="Número"
                    {...register("numero")}
                    required
                  />
                  <CheckoutformComplemento
                    type="text"
                    placeholder="Complemento"
                    {...register("complemento")}
                    required
                  />
                </CheckoutFomDiv2>

                <CheckoutFomDiv3>
                  <CheckoutformBairro
                    type="text"
                    placeholder="Bairro"
                    {...register("bairro")}
                    disabled
                  />
                  <CheckoutformCidade
                    type="text"
                    placeholder="Cidade"
                    {...register("localidade")}
                    disabled
                  />
                  <CheckoutformEstado
                    type="text"
                    placeholder="UF"
                    {...register("uf")}
                    disabled
                  />
                </CheckoutFomDiv3>
                <button type="submit">enviar</button>
              </CheckoutForm>
            </CheckoutDiv>
            <CheckoutPayment>
              <CheckoutPaymentDiv>
                <CheckoutImg src={Icon$} />
                <CheckoutPaymentP>
                  Pagamento
                  <br />
                  <span>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </span>
                </CheckoutPaymentP>
              </CheckoutPaymentDiv>
              <CheckoutPaymentDivButton>
                <button>
                  <img src={IconCard} alt="icone Cartão de crédito" />
                  Cartão de Crédito
                </button>
                <button>
                  <img src={IconBanck} alt="icone Banco" />
                  Cartão de Débito
                </button>
                <button className="active">
                  <img src={IconDollar} alt="icone Dinheiro" />
                  Dinheiro
                </button>
              </CheckoutPaymentDivButton>
            </CheckoutPayment>
          </CheckoutAddress>

          <CheckoutCart>
            <CheckoutH1>Cafés selecionados</CheckoutH1>
            <CheckoutCartContent>
              {/* <CheckoutCartNoItens>
                  <p>Ops!! Não há itens no carrinho</p>
                  <button>
                    Adicionar produtos ao carrinho
                  </button>
                  </CheckoutCartNoItens> */}
              <CheckoutCartList>
                <CheckoutCartListItem>
                  <CheckoutCartListItemImg>
                    <img src={Coffee1} alt="Café" />
                  </CheckoutCartListItemImg>
                  <CheckoutCartListItemDiv>
                    <CheckoutCartListItemDivPriceInfo>
                      <p>Expresso Tradicional</p>
                    </CheckoutCartListItemDivPriceInfo>
                    <CheckoutCartListItemDivButtons>
                      <CheckoutCartQuantity>
                        <CheckoutCartQuantityButton>
                          <Minus size={16} />
                        </CheckoutCartQuantityButton>
                        <CheckoutCartQuantitySpan>1</CheckoutCartQuantitySpan>
                        <CheckoutCartQuantityButton>
                          <Plus size={16} />
                        </CheckoutCartQuantityButton>
                      </CheckoutCartQuantity>
                      <button>
                        <Trash size={16} /> Remover
                      </button>
                    </CheckoutCartListItemDivButtons>
                  </CheckoutCartListItemDiv>
                  <CheckoutCartListItemDivPrice>
                    <p>R$ 10,00</p>
                  </CheckoutCartListItemDivPrice>
                </CheckoutCartListItem>

                <CheckoutCartListItem>
                  <CheckoutCartListItemImg>
                    <img src={Coffee1} alt="Café" />
                  </CheckoutCartListItemImg>
                  <CheckoutCartListItemDiv>
                    <CheckoutCartListItemDivPriceInfo>
                      <p>Expresso Tradicional</p>
                    </CheckoutCartListItemDivPriceInfo>
                    <CheckoutCartListItemDivButtons>
                      <CheckoutCartQuantity>
                        <CheckoutCartQuantityButton>
                          <Minus size={16} />
                        </CheckoutCartQuantityButton>
                        <CheckoutCartQuantitySpan>1</CheckoutCartQuantitySpan>
                        <CheckoutCartQuantityButton>
                          <Plus size={16} />
                        </CheckoutCartQuantityButton>
                      </CheckoutCartQuantity>
                      <button>
                        <Trash size={16} /> Remover
                      </button>
                    </CheckoutCartListItemDivButtons>
                  </CheckoutCartListItemDiv>
                  <CheckoutCartListItemDivPrice>
                    <p>R$ 10,00</p>
                  </CheckoutCartListItemDivPrice>
                </CheckoutCartListItem>

                <CheckoutCartListTotal>
                  <CheckoutCartListTotalProducts>
                    <p>Total de iten</p> <span>R$29.90</span>
                  </CheckoutCartListTotalProducts>
                  <CheckoutCartListTotalFrete>
                    <p>Total de frete</p> <span>R$10,00</span>
                  </CheckoutCartListTotalFrete>
                  <CheckoutCartListTotalFinal>
                    <p>Total</p> <span>R$39.90</span>
                  </CheckoutCartListTotalFinal>
                </CheckoutCartListTotal>
                <button className="ButtonCheckout">Confirmar Pedido</button>
              </CheckoutCartList>
            </CheckoutCartContent>
          </CheckoutCart>
        </ContentCheckout>
      </ContainerCheckout>
    </>
  );
}
