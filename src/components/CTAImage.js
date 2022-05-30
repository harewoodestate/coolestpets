import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2em 0 0 2em;
  @media (max-width: 800px) {
    border-radius: 0;
  }
`;

Image.defaultProps = {
  src: "/image2.png",
};

const CTAImage = () => {
  return <Image />;
};

export default CTAImage;
