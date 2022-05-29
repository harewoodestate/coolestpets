import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #285dab;
  height: 100%;
  padding: 5em 0 0 2em;
  align-items: start;
  border-radius: 0 2em 2em 0;
`;

const Heading = styled.h1`
  color: #ffffff;
  width: 80%;
`;

const CTAText = styled.p`
  color: #ffffff;
  width: 80%;
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
