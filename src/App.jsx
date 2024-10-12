import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyle";

const H1 = styled.h1`
  background-color: yellow;
 font-weight: 600;
  font-size: 30px;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-brand-600);
  color: var(--color-brand-50);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
`
const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`

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
