import "./App.css";
import ContainerLayout from "./components/ContainerLayout";
import SearchFilter from "./components/SearchFilter";
import CTASection from "./components/CTALayout";
import List from "./components/List";
import Grid from "./components/Grid";
import CTAImage from "./components/CTAImage";
import CTAButton from "./components/CTAButton";

function App() {
  return (
    <ContainerLayout>
      <SearchFilter>
        <Grid />
      </SearchFilter>
      <CTASection>
        <CTAImage />
        <CTAButton />
      </CTASection>
      <List />
    </ContainerLayout>
  );
}

export default App;
