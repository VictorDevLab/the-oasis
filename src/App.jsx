import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyle";

const H1 = styled.h1`
  background-color: red;
  font-size: 20px;
`;
function App() {
  return (
    <>
      {/* its a self closing component and does not accept any children */}
      <GlobalStyles />
      <H1>Hello world</H1>
    </>
  )
}

export default App
