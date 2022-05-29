import styled from "styled-components";

const Container = styled.div``;

const SectionOne = styled.div``;

const SectionTwo = styled.div``;

const SectionThree = styled.div``;

const ContainerLayout = ({ children }) => {
  const [one, two, three] = children;

  return (
    <Container>
      <SectionOne>{one}</SectionOne>
      <SectionTwo>{two}</SectionTwo>
      <SectionThree>{three}</SectionThree>
    </Container>
  );
};

export default ContainerLayout;
