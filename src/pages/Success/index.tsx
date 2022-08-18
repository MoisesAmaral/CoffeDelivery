import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Navbar } from "../../components/Navbar";
import { ContainerSuccess,
         ContentSuccess,
         DivSuccessAddress,
         DivSuccessAddressDiv,
         DivSuccessAddressImg,
         DivSuccessAddressText,
         DivSuccessh1,
         DivSuccessP,
         DivSuccessRight,

     } from "./stylesSuccess";

export function Success(){
    return (
        <>
        <Navbar />

        <ContainerSuccess>
            <ContentSuccess>
                <DivSuccessRight>
                    <DivSuccessh1>
                    </DivSuccessh1>
                    <DivSuccessP>
                    </DivSuccessP>
                    <DivSuccessAddress>
                        <DivSuccessAddressDiv>
                            <DivSuccessAddressImg>
                            <MapPin
                                size={28} 
                                color="#efecec" 
                                weight="fill" 
                            />
                            </DivSuccessAddressImg>
                            <DivSuccessAddressText>
                                <p>
                                    Entrega em 
                                    <strong>
                                        Rua João Daniel Martinelli, 102 
                                    </strong> <br /> Farrapos - Porto Alegre, RS
                                </p>
                            </DivSuccessAddressText> 
                        </DivSuccessAddressDiv>

                        <DivSuccessAddressDiv>
                            <DivSuccessAddressImg>
                            <Timer 
                                size={28} 
                                color="#efecec" 
                                weight="fill" 
                            />
                            </DivSuccessAddressImg>
                            <DivSuccessAddressText>
                                <p>
                                    Previsão de entrega
                                    <br />
                                    <strong>
                                        20 min - 30 min
                                    </strong>
                                </p>
                            </DivSuccessAddressText> 
                        </DivSuccessAddressDiv>

                        <DivSuccessAddressDiv>
                            <DivSuccessAddressImg>
                            <CurrencyDollar 
                                size={28} 
                                color="#efecec" 
                                weight="fill" 
                            />
                            </DivSuccessAddressImg>
                            <DivSuccessAddressText>
                                <p>Pagamento na entrega 
                                    <br />
                                    <strong>
                                        Cartão de Crédito
                                    </strong>
                                </p>
                            </DivSuccessAddressText> 
                        </DivSuccessAddressDiv>

                    </DivSuccessAddress>
                </DivSuccessRight>
            </ContentSuccess>
        </ContainerSuccess>

        </>

    )
}