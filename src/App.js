import "./App.css";
import ContainerLayout from "./components/ContainerLayout";
import SearchFilter from "./components/SearchFilter";
import CTASection from "./components/CTASection";
import List from "./components/List";
import Grid from "./components/Grid";

function App() {
  return (
    <ContainerLayout>
      <SearchFilter>
        <Grid />
      </SearchFilter>
      <CTASection />
      <List />
    </ContainerLayout>
  );
}

export default App;
