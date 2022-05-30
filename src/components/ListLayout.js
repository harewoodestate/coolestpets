import styled from "styled-components";
import HeartIcon from "./icons/HeartIcon";
import PinIcon from "./icons/PinIcon";
import ClockIcon from "./icons/ClockIcon";
import ConfettieIcon from "./icons/ConfettieIcon";
import HomeIcon from "./icons/HomeIcon";

const Layout = styled.div``;

const Heading = styled.h1`
  margin-bottom: 3em;
`;

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 2em;
  @media (max-width: 800px) {
    overflow: scroll;
  }
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 20%;
  height: 10em;
  flex: 1;
  gap: 0.5em;
  @media (max-width: 800px) {
    height: 5em;
  }
`;

const IconBackground = styled.div`
  background-color: #f0f0f0;
  border-radius: 0.7em;
  height: 6em;
  @media (max-width: 800px) {
    height: 3em;
  }
`;

const ListText = styled.p`
  font-size: 1em;
  font-weight: 600;
  margin: 0;
`;

const ListLayout = () => {
  return (
    <Layout className={`categories`}>
      <Heading>Categories</Heading>
      <List>
        <ListItem>
          <IconBackground>
            <HeartIcon />
          </IconBackground>
          <ListText>All pets</ListText>
        </ListItem>
        <ListItem>
          <IconBackground>
            <PinIcon />
          </IconBackground>
          <ListText>Location specific</ListText>
        </ListItem>
        <ListItem>
          <IconBackground>
            <ClockIcon />
          </IconBackground>
          <ListText>Age specific</ListText>
        </ListItem>
        <ListItem>
          <IconBackground>
            <ConfettieIcon />
          </IconBackground>
          <ListText>Available now</ListText>
        </ListItem>
        <ListItem>
          <IconBackground>
            <HomeIcon />
          </IconBackground>
          <ListText>For small or big homes</ListText>
        </ListItem>
      </List>
    </Layout>
  );
};

export default ListLayout;
