import { Link } from "react-router-dom";
import styled from "styled-components";

const Layout = styled.div``;

const Heading = styled.h1``;

const GridList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 2em;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ListItem = styled.li`
  display: flex;
  font-size: 1.5em;
  font-weight: bold;
  flex-direction: column;
  list-style-type: none;
  width: 30%;
  height: 20em;
  gap: 0.5em;
  @media (max-width: 800px) {
    flex-direction: row;
    width: 100%;
    height: 7em;
    align-items: center;
    justify-content: space-between;
    overflow: visible;
  }
`;
const Text = styled.p`
  @media (max-width: 800px) {
    align-self: center;
    text-align: center;
    flex: 1;
  }
`;

const ListImage = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 1em;
  object-fit: cover;
  @media (max-width: 800px) {
    flex: 2;
    height: 100%;
  }
`;

const ListButton = styled.button`
  background-color: #2b6db1;
  color: #ffffff;
  font-size: 1em;
  border-radius: 2em;
  width: 7em;
  height: 2.5em;
  border: none;
  cursor: pointer;
  @media (max-width: 800px) {
    width: 2.5em;
    border-radius: 50%;
    color: transparent;
    flex: 2;
    background-image: url("/icons/arrow-right.svg");
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
`;

const GridLayout = ({ filteredResults }) => {
  return (
    <Layout>
      <Heading>Results</Heading>
      <GridList>
        {filteredResults.slice(0, 3).map((pet) => (
          <ListItem key={pet.id}>
            <ListImage src={pet.photo} alt={`${pet.name}`} />
            <Text>{pet.name}</Text>
            <Link to={`/details?id=${pet.id}`}>
              <ListButton aria-label="View">View</ListButton>
            </Link>
          </ListItem>
        ))}
      </GridList>
    </Layout>
  );
};

export default GridLayout;
