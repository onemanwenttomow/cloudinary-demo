import Header from "@/components/Header";
import GlobalStyle from "../styles";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <StyledWrapper>
        <GlobalStyle />
        <Component {...pageProps} />
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  height: 100vh; // fallback for browsers that have not implemented dvh
  height: 100dvh;
  display: grid;
  place-items: center;
`;
