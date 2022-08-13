import {
  ContainerMain,
  ContentInfo,
  ContentInfoLeft,
  ContentInfoRight,
  ContentMain,
  ContentMainLeft,
  ContentMainRight,
  // VideoBg,
} from "./stylesMain";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import CoffeBg from "../../assets/coffebg.svg";
import Video from "../../assets/video.mp4";


export function Hero() {
  return (
    <ContainerMain>
      <ContentMain>
        {/* <VideoBg autoPlay loop muted src={Video} /> */}
        <ContentMainLeft>
          <h1>
            Encontre o café perfeito <br /> para qualquer hora do dia.
          </h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a <br />{" "}
            qualquer hora.
          </p>
        </ContentMainLeft>

        <ContentMainRight>
          <img src={CoffeBg} alt="" />
        </ContentMainRight>
        <ContentInfo>
          <ContentInfoLeft>
            <div className="infoCart">
              <div>
                <ShoppingCart 
                    size={28} 
                    color="#efecec" 
                    weight="fill" 
                />
              </div>
              <p>Compra simples e segura</p>
            </div>
            <div className="infoTime">
              <div>
                <Timer 
                    size={28} 
                    color="#efecec" 
                    weight="fill" 
                />
              </div>
              <p>Entrega rápida e rastreada </p>
            </div>
          </ContentInfoLeft>
          <ContentInfoRight>
            <div className="infoPackage">
              <div>
              <Package 
                    size={28} 
                    color="#efecec" 
                    weight="fill" 
                />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div className="infoCoffee">
              <div>
                <Coffee 
                    size={28} 
                    color="#efecec" 
                    weight="fill" 
                />
              </div>
              <p>O café chega fresquinho até você</p>
            </div>
          </ContentInfoRight>
        </ContentInfo>
      </ContentMain>
    </ContainerMain>
  );
}
