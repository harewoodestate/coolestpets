import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.header`
  height: 4em;
  background-color: #f8cf47;
`;

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
  const [one, two, three] = children;

  return (
    <>
      <Container>
        <Header />
        <SectionOne>{one}</SectionOne>
        <SectionTwo>{two}</SectionTwo>
        <SectionThree>{three}</SectionThree>
        <Footer />
      </Container>
    </>
  );
};

export default ContainerLayout;
