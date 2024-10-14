import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  background-color: yellow;
 font-weight: 600;
  font-size: 30px;
`;



function App() {
  return (
    <>
      {/* its a self closing component and does not accept any children */}
      <GlobalStyles />
      <H1>Hello world</H1>
      <Button>Check In</Button>
      <Button>Check Out</Button>
      <Input type="number" placeholder="Number of guests" />
    </>
  )
}

export default App
