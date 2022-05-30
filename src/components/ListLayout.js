import styled from "styled-components";
import HeartIcon from "./icons/HeartIcon";
import PinIcon from "./icons/PinIcon";
import ClockIcon from "./icons/ClockIcon";
import ConfettieIcon from "./icons/ConfettieIcon";
import HomeIcon from "./icons/HomeIcon";

const Layout = styled.div``;

const Heading = styled.h1``;

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 2em;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 20%;
  flex: 1;
  gap: 0.5em;
`;

const IconBackground = styled.div`
  background-color: #f0f0f0;
  border-radius: 0.7em;
  height: 4em;
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

IconImage.defaultProps = {
  src: "/icons/heart.svg",
};

const ListText = styled.p`
  font-size: 1em;
  font-weight: 600;
  margin: 0;
`;

const ListLayout = () => {
  return (
    <Layout>
      <Heading>Categories</Heading>
      <List>
        <ListItem>
          <IconBackground>
            <HeartIcon width={225} height={75} />
          </IconBackground>
          <ListText>All pets</ListText>
        </ListItem>
        <ListItem>
          <IconBackground>
            <PinIcon width={225} height={75} />
          </IconBackground>
          <ListText>Location specific</ListText>
        </ListItem>
        <ListItem>
          <IconBackground>
            <ClockIcon width={225} height={75} />
          </IconBackground>
          <ListText>Age specific</ListText>
        </ListItem>
        <ListItem>
          <IconBackground>
            <ConfettieIcon width={225} height={75} />
          </IconBackground>
          <ListText>Available now</ListText>
        </ListItem>
        <ListItem>
          <IconBackground>
            <HomeIcon width={225} height={75} />
          </IconBackground>
          <ListText>For small or big homes</ListText>
        </ListItem>
      </List>
    </Layout>
  );
};

export default ListLayout;
