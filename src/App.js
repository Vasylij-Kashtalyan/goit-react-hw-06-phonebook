import Container from "./components/Container";
import Section from "./components/Section";
import Contact from "./components/Contact/Contact";
import Filter from "./components/Filter/Filter";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <Container>
      <Section title="Phonebok">
        <Form />
      </Section>

      <Filter />

      <Section title="Contact">
        <Contact />
      </Section>
    </Container>
  );
};
export default App;
