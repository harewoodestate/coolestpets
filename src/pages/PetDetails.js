import ContainerLayout from "../components/ContainerLayout";
import styled from "styled-components";
import { useGetPetsQuery } from "../services/pets";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

const useQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const DetailsLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 40em;
  column-gap: 3em;
  @media (max-width: 800px) {
    flex-wrap: nowrap;
  }
`;

const DetailsImage = styled.img`
  width: 50%;
  height: 37em;
  object-fit: cover;
  border-radius: 1em;
  @media (max-width: 800px) {
    width: 100%;
    height: 20em;
    border-radius: 0;
    order: 2;
  }
`;

const PageTitle = styled.h1`
  width: 50%;
  height: 1em;
  @media (max-width: 800px) {
    order: 1;
  }
`;

const Details = styled.section`
  width: 50%;
  height: 20em;
  @media (max-width: 800px) {
    order: 3;
    width: 100%;
  }
`;

const DetailsList = styled.ul`
  display; flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  height: 10em;
`;

const ListItem = styled.li`
  width: 50%;
  display: inline-block;
`;

const ListHeading = styled.h2``;

const Text = styled.p``;

const PetDetails = () => {
  const query = useQuery();
  const [yearNow, setYearNow] = useState();

  useEffect(() => {
    const today = new Date();

    const year = today.getFullYear();

    setYearNow(year);
  }, []);

  const { data, error, isLoading, isSuccess, isError } = useGetPetsQuery();

  const id = query.get("id");

  return (
    <ContainerLayout>
      {isLoading && "Loading..."}
      {isError && error.message}
      {isSuccess && data && (
        <DetailsLayout>
          <DetailsImage
            src={data.pets.find((x) => x.id === Number(id)).photo}
          />
          <PageTitle>
            {data.pets.find((x) => x.id === Number(id)).name}
          </PageTitle>
          <Details>
            <DetailsList>
              <ListItem>
                <ListHeading>Type</ListHeading>
                <Text>
                  {data.pets.find((x) => x.id === Number(id)).species}
                </Text>
              </ListItem>
              <ListItem>
                <ListHeading>Date added</ListHeading>
                <Text>
                  {data.pets.find((x) => x.id === Number(id)).dateAdded}
                </Text>
              </ListItem>
              <ListItem>
                <ListHeading>Category</ListHeading>
                <Text>Small pet</Text>
              </ListItem>
              <ListItem>
                <ListHeading>Age</ListHeading>
                <Text>
                  {yearNow -
                    data.pets.find((x) => x.id === Number(id)).birthYear}
                </Text>
              </ListItem>
            </DetailsList>
          </Details>
        </DetailsLayout>
      )}
    </ContainerLayout>
  );
};

export default PetDetails;
