import GlobalStyles from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";



function App() {
  return (
    <>
      {/* its a self closing component and does not accept any children */}
      <GlobalStyles />
      <Heading as="h1">Hello world</Heading>
      <Heading as="h3">Hello Small</Heading>
      <Button>Check In</Button>
      <Button>Check Out</Button>
      <Input type="number" placeholder="Number of guests" />
    </>
  )
}

export default App
