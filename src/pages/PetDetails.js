import ContainerLayout from "../components/ContainerLayout";
import styled from "styled-components";

const DetailsLayout = styled.div`
  display: flex;
`;

const DetailsImage = styled.img`
  flex: 1;
`;

const Details = styled.section`
  flex: 1;
`;

const PetDetails = () => {
  return (
    <ContainerLayout>
      <DetailsLayout>
        <DetailsImage />
        <Details />
      </DetailsLayout>
    </ContainerLayout>
  );
};

export default PetDetails;
