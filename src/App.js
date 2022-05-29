import "./App.css";
import ContainerLayout from "./components/ContainerLayout";
import SearchFilter from "./components/SearchFilter";
import CTASection from "./components/CTASection";
import List from "./components/List";

function App() {
  return (
    <ContainerLayout>
      <SearchFilter />
      <CTASection />
      <List />
    </ContainerLayout>
  );
}

export default App;
