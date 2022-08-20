import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Navbar } from "../../components/Navbar";
import { ContainerSuccess,
         ContentSuccess,
         DivSuccessAddress,
         DivSuccessAddressDiv,
         DivSuccessAddressImg1,
         DivSuccessAddressImg2,
         DivSuccessAddressImg3,
         DivSuccessAddressModule,
         DivSuccessAddressText,
         DivSuccessh1,
         DivSuccessImg,
         DivSuccessLeft,
         DivSuccessP,
         DivSuccessRight,
     } from "./stylesSuccess";
     import Illustration from "../../assets/images/Illustration.svg";

export function Success(){
    return (
        <>
        <Navbar />
        <ContainerSuccess>
            <ContentSuccess>
                <DivSuccessRight>
                    <DivSuccessh1>
                    Uhu! Pedido confirmado.
                    </DivSuccessh1>
                    <DivSuccessP>
                    Agora é só aguardar que logo o café chegará até você.
                    </DivSuccessP>
                    <DivSuccessAddress>
                    <DivSuccessAddressModule>
                        <DivSuccessAddressDiv>
                            <DivSuccessAddressImg1>
                            <MapPin
                                size={18} 
                                color="#efecec" 
                                weight="fill" 
                            />
                            </DivSuccessAddressImg1>
                            <DivSuccessAddressText>
                                <p>Entrega em <strong> Rua João Daniel Martinelli, 102</strong> <br /> Farrapos - Porto Alegre, RS</p>
                            </DivSuccessAddressText> 
                        </DivSuccessAddressDiv>

                        <DivSuccessAddressDiv>
                            <DivSuccessAddressImg2>
                            <Timer 
                                size={18} 
                                color="#efecec" 
                                weight="fill" 
                            />
                            </DivSuccessAddressImg2>
                            <DivSuccessAddressText>
                                <p>
                                    Previsão de entrega <br /> <strong> 20 min - 30 min</strong></p>
                            </DivSuccessAddressText> 
                        </DivSuccessAddressDiv>

                        <DivSuccessAddressDiv>
                            <DivSuccessAddressImg3>
                            <CurrencyDollar 
                                size={18} 
                                color="#efecec" 
                                weight="fill" 
                            />
                            </DivSuccessAddressImg3>
                            <DivSuccessAddressText>
                                <p>Pagamento na entrega <br /><strong> Cartão de Crédito</strong></p>
                            </DivSuccessAddressText> 
                        </DivSuccessAddressDiv>
                        </DivSuccessAddressModule>
                    </DivSuccessAddress>
                </DivSuccessRight>
                <DivSuccessLeft>
                <DivSuccessImg src={Illustration} />
                </DivSuccessLeft>
            </ContentSuccess>
        </ContainerSuccess>

        </>

    )
}