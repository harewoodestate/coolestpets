import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #285dab;
  height: 100%;
  padding: 5em 0 0 2em;
  align-items: flex-start;
  border-radius: 0 2em 2em 0;
  @media (max-width: 800px) {
    flex-direction: row;
    border-radius: 0;
    height: 2em;
    padding: 3em 0.5em;
  }
`;

const Heading = styled.h1`
  color: #ffffff;
  width: 80%;
  @media (max-width: 800px) {
    margin: 0;
  }
`;

const CTAText = styled.p`
  color: #ffffff;
  width: 80%;
  @media (max-width: 800px) {
    display: none;
  }
`;

const CTAStyledButton = styled.button`
  background-color: #ffffff;
  color: #2b6db1;
  font-size: 1em;
  border-radius: 2em;
  width: 60%;
  height: 2.5em;
  border: none;
`;

const CTAButton = () => {
  return (
    <Layout>
      <Heading>Pets Directory</Heading>
      <CTAText>
        See all pets available for adoption, promote them and get them a home.
      </CTAText>
      <CTAStyledButton>See all</CTAStyledButton>
    </Layout>
  );
};

export default CTAButton;
