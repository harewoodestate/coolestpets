import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #285dab;
  height: 100%;
  padding: 3.5em 0 1.5em 2em;
  align-items: flex-start;
  border-radius: 0 2em 2em 0;
  @media (max-width: 800px) {
    flex-direction: row;
    border-radius: 0;
    padding: 0 1em;
    height: 4em;
  }
`;

const Heading = styled.h1`
  color: #ffffff;
  width: 80%;
  @media (max-width: 800px) {
    align-self: center;
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
  cursor: pointer;
  @media (max-width: 800px) {
    align-self: center;
    width: 2.5em;
    border-radius: 50%;
    color: transparent;
    background-color: transparent;
    background-image: url("/icons/arrow-right.svg");
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
`;

const CTAButton = () => {
  return (
    <Layout>
      <Heading>Pets Directory</Heading>
      <CTAText>
        See all pets available for adoption, promote them and get them a home.
      </CTAText>
      <CTAStyledButton aria-label="See all">See all</CTAStyledButton>
    </Layout>
  );
};

export default CTAButton;
