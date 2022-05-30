import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGetPetsQuery } from "../services/pets";
import Fuse from "fuse.js";

const Layout = styled.div``;

const Heading = styled.h1``;

const GridList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 2em;
`;

const ListItem = styled.li`
  display: flex;
  font-size: 1.5em;
  font-weight: bold;
  flex-direction: column;
  list-style-type: none;
  width: 30%;
  height: 20em;
  flex: 1;
  gap: 0.5em;
`;
//TODO: Put text in p tag
const ListImage = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 1em;
  object-fit: cover;
`;

const ListButton = styled.button`
  background-color: #2b6db1;
  color: #ffffff;
  font-size: 1em;
  border-radius: 2em;
  width: 7em;
  height: 2.5em;
  border: none;
`;

const GridLayout = ({ query }) => {
  const { data, error, isLoading, isSuccess, isError } = useGetPetsQuery();
  let petResults;
  if (isSuccess) {
    const fuse = new Fuse(data.pets, {
      keys: ["name", "species"],
    });

    const results = fuse.search(query);
    petResults = results.map((result) => result.item);
  }

  return (
    <Layout>
      <Heading>Results</Heading>
      {isLoading && "Loading..."}
      {isError && error.message}
      <GridList>
        {isSuccess &&
          data &&
          petResults.slice(0, 3).map((pet) => (
            <ListItem key={pet.id}>
              <ListImage src={pet.photo} alt="" />
              {pet.name}
              <Link to={`/details?id=${pet.id}`}>
                <ListButton>View</ListButton>
              </Link>
            </ListItem>
          ))}
      </GridList>
    </Layout>
  );
};

export default GridLayout;
