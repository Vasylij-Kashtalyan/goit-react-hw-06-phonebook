import Container from "./components/Container";
import Form from "./components/Form/Form";
import Contacts from "./components/Contact/Contact";
import Filter from "./components/Filter/Filter";

const App = () => {
  return (
    <Container>
      <h2>Phonebook</h2>
      <Form />
      <Filter />
      <h2>Contacts</h2>
      <Contacts />
    </Container>
  );
};
export default App;
