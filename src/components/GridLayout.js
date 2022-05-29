import styled from "styled-components";

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
  flex: 1;
  gap: 0.5em;
`;
//TODO: Put text in p tag
const ListImage = styled.img`
  width: 100%;
  border-radius: 1em;
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

ListImage.defaultProps = {
  src: "/image1.png",
};

const GridLayout = () => {
  return (
    <Layout>
      <Heading>Results</Heading>
      <GridList>
        <ListItem>
          <ListImage />
          One
          <ListButton>View</ListButton>
        </ListItem>
        <ListItem>
          <ListImage />
          Two
          <ListButton>View</ListButton>
        </ListItem>
        <ListItem>
          <ListImage />
          Three
          <ListButton>View</ListButton>
        </ListItem>
      </GridList>
    </Layout>
  );
};

export default GridLayout;
