import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const useQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2.5em;
  height: auto;
`;

const Header = styled.header`
  height: 4em;
  background-color: #f8cf47;
  display: flex;
  justify-content: center;
  @media (max-width: 800px) {
    background-color: transparent;
  }
`;

const Navigation = styled.nav`
  width: 75vw;
  align-self: center;
`;

const Logo = styled.img`
  width: 3em;
  height: 3em;
`;

Logo.defaultProps = {
  src: "/icons/pet-icon.svg",
};

const SectionOne = styled.section`
  width: 75vw;
  align-self: center;
`;

const SectionTwo = styled.section`
  width: 75vw;
  align-self: center;
`;

const SectionThree = styled.section`
  width: 75vw;
  align-self: center;
`;

const Footer = styled.footer`
  height: 3em;
  background-color: #2b6db1;
`;

const ContainerLayout = ({ children }) => {
  let childrenArray = React.Children.toArray(children);
  const [one, two, three] = childrenArray;

  const query = useQuery();

  return (
    <Container id={query.get("id")}>
      <Header>
        <Navigation>
          <Link to="/">
            <Logo />
          </Link>
        </Navigation>
      </Header>
      <SectionOne>{one}</SectionOne>
      <SectionTwo>{two}</SectionTwo>
      <SectionThree>{three}</SectionThree>
      <Footer />
    </Container>
  );
};

export default ContainerLayout;
