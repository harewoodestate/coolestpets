import styled from "styled-components";

const Layout = styled.div``;

const Heading = styled.h1``;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSearchBar = styled.input`
  width: 30em;
  height: 3em;
  border-radius: 2em;
  border: 1px solid #dddddd;
  padding-left: 4em;
`;

const FilterControls = styled.div`
  display: flex;
  margin-top: 1em;
  column-gap: 0.5em;
`;

const StyledSelect = styled.select`
  height: 2.5em;
  border: 1px solid #dddddd;
  border-radius: 2em;
  padding-left: 1em;
`;

const ToggleButton = styled.button`
  height: 2.5em;
  border: 1px solid #dddddd;
  border-radius: 2em;
  background-color: transparent;
  padding: 0 1em;
`;

const SearchFilter = ({ children }) => {
  return (
    <Layout>
      <Heading>Pets</Heading>
      <StyledForm>
        <StyledSearchBar type="text" placeholder="Search for pets" />
        <FilterControls>
          <StyledSelect>
            <option value="">Type</option>
            <option value="">Type1</option>
            <option value="">Type2</option>
            <option value="">Type3</option>
          </StyledSelect>
          <StyledSelect>
            <option value="">Category</option>
            <option value="">Category1</option>
            <option value="">Category2</option>
            <option value="">Category3</option>
          </StyledSelect>
          <ToggleButton>Latest added</ToggleButton>
        </FilterControls>
      </StyledForm>
      {children}
    </Layout>
  );
};

export default SearchFilter;
