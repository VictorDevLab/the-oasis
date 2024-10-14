import GlobalStyles from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";
import styled from "styled-components";

const StyledApp = styled.div`
  background-color: beige;
  padding: 20px;
`;
function App() {
  return (
    <>
      {/* its a self closing component and does not accept any children */}
      <GlobalStyles />
      <StyledApp>
        <Row>

        <Row type="horizontal">
          <Heading as="h1">Hello world</Heading>
          <div>
            <Heading as="h3">Hello Small</Heading>
            <Button>Check In</Button>
            <Button variation="secondary">Check Out</Button>
          </div>
        </Row>
        <Row>
          <Heading as="h3">Form</Heading>
          <form>
            <Input type="number" placeholder="Number of guests" />
            <Input type="number" placeholder="Number of guests" />
          </form>
        </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
