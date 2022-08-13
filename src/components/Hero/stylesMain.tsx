import styled from "styled-components";
import background from "../../assets/images/background1.svg";

export const ContainerMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
`;
export const ContentMain = styled.div`
  width: 100%;
  height: 64.4rem;
  padding: 3.2rem 20rem;

  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
// export const VideoBg = styled.video`
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: -1;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   object-fit: cover;
//   object-position: center;
//   opacity: 0.3;
// `
export const ContentMainLeft = styled.div`
  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 5.8rem;
    line-height: 6.4rem;
    font-weight: 800;
    color: var(--base-title);

    margin-bottom: 1.6rem;
  }
  p {
    font-family: "Roboto", sans-serif;
    font-size: 2rem;
    line-height: 2.6rem;
    font-weight: 400;
    font-stretch: 100;
    color: var(--base-subtitle);
  }
`;
export const ContentMainRight = styled.div`
  margin-top: 5.2rem;
  img {
    width: 536px;
    height: 390px;
  }
`;
export const ContentInfo = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
  width: 100%;
`;
export const ContentInfoLeft = styled.div`
  display: block;

  .infoCart {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.6rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;
      width: 4.2rem;
      height: 4.2rem;
      background: var(--yellow-dark);
    }
    p {
      font-size: 1.6rem;
      line-height: 2.4rem;
      font-weight: 400;
      color: var(--base-subtitle);
    }
  }
  .infoTime {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.6rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;
      width: 4.2rem;
      height: 4.2rem;
      background: var(--yellow);
    }
    p {
      font-size: 1.6rem;
      line-height: 2.4rem;
      font-weight: 400;
      color: var(--base-subtitle);
    }
  }
`;
export const ContentInfoRight = styled.div`
  .infoPackage {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.6rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;
      width: 4.2rem;
      height: 4.2rem;
      background: var(--base-text);
    }
    p {
      font-size: 1.6rem;
      line-height: 2.4rem;
      font-weight: 400;
      color: var(--base-subtitle);
    }
  }
  .infoCoffee {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.6rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;
      width: 4.2rem;
      height: 4.2rem;
      background: var(--purple);
    }
    p {
      font-size: 1.6rem;
      line-height: 2.4rem;
      font-weight: 400;
      color: var(--base-subtitle);
    }
  }
`;
