import styled from "styled-components";

const Layout = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 2;
`;

const Right = styled.div`
  flex: 1;
`;

const CTALayout = ({ children }) => {
  const [ctaImage, ctaButton] = children;
  return (
    <Layout>
      <Left>{ctaImage}</Left>
      <Right>{ctaButton}</Right>
    </Layout>
  );
};

export default CTALayout;
