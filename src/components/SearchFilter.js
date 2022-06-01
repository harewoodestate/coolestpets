import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGetPetsQuery } from "../services/pets";
import Fuse from "fuse.js";

const Layout = styled.div``;

const Heading = styled.h1``;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchBarWrapper = styled.div`
  width: 30em;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const StyledSearchBar = styled.input`
  width: 100%;
  height: 4em;
  outline: none;
  background-image: url('/icons/search.svg');
  background-repeat: no-repeat;
  background-position: 1.5em 50%;
  border-radius: ${(props) => (props.value ? "1em 1em 0 0;" : "2em;")}
  border: ${(props) =>
    props.value ? "2px solid #2b6db1;" : "1px solid #dddddd;"}
  border-bottom: ${(props) =>
    props.value ? "1px solid #dddddd;" : "1px solid #dddddd;"}
  background-color: ${(props) => (props.value ? "#ffffff;" : "transparent;")};
  padding-left: 4em;
  @media (max-width: 800px) {
    background-color: ${(props) => (props.value ? "#ffffff;" : "#f0f0f0;")};
    width: 100%;
  }
`;

const StyledSuggestionList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  border: 2px solid #2b6db1;
  border-top: none;
  border-radius: 0 0 1em 1em;
  margin: 0;
  padding: 0 0 0.5em 0;
  gap: 0.1em;
`;

const SuggestionListItem = styled.li`
  padding: 0.5em 0 0.5em 1.5em;
`;

export const SearchListLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: #000000;
  &:hover {
    font-weight: bold;
  }
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
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const { data, error, isLoading, isSuccess, isError } = useGetPetsQuery();

  useEffect(() => {
    let results;

    if (isSuccess) {
      const fuse = new Fuse(data.pets, {
        keys: ["name", "species"],
      });

      if (query === "") {
        results = fuse.search("dogs");
      } else {
        results = fuse.search(query);
      }

      let petResults = results.map((result) => result.item);

      setFilteredResults(petResults);
    }
  }, [data, query, isSuccess]);

  const handleOnSearch = (keywords) => {
    const queryValue = keywords;
    setQuery(queryValue);
  };

  return (
    <Layout>
      <Heading>Pets</Heading>
      <StyledForm>
        <SearchBarWrapper>
          <StyledSearchBar
            type="text"
            value={query}
            onChange={(e) => handleOnSearch(e.target.value)}
            placeholder="Search for pets"
          />
          {isLoading && "Loading..."}
          {isError && error.message}
          {query && isSuccess && data && (
            <StyledSuggestionList>
              {filteredResults.slice(0, 3).map((pet) => (
                <SuggestionListItem key={pet.id}>
                  <SearchListLink to={`/details?id=${pet.id}`}>
                    {pet.name}
                  </SearchListLink>
                </SuggestionListItem>
              ))}
            </StyledSuggestionList>
          )}
        </SearchBarWrapper>
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
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { filteredResults });
        } else {
          return child;
        }
      })}
    </Layout>
  );
};

export default SearchFilter;
