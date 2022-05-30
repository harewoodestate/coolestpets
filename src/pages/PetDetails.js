import ContainerLayout from "../components/ContainerLayout";
import styled from "styled-components";

const DetailsLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 40em;
  column-gap: 3em;
`;

const DetailsImage = styled.div`
  width: 50%;
  height: 37em;
  background-image: url("/image1.png");
  background-repeat: no-repeat;
  border-radius: 1em;
`;

const PageTitle = styled.h1`
  width: 50%;
  height: 1em;
`;

const Details = styled.section`
  width: 50%;
  height: 20em;
`;

const DetailsList = styled.ul`
  display; flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  height: 10em;
`;

const ListItem = styled.li`
  width: 50%;
  display: inline-block;
`;

const ListHeading = styled.h2``;

const Text = styled.p``;

const PetDetails = () => {
  return (
    <ContainerLayout>
      <DetailsLayout>
        <DetailsImage />
        <PageTitle>Dann</PageTitle>
        <Details>
          <DetailsList>
            <ListItem>
              <ListHeading>Type</ListHeading>
              <Text>Dog</Text>
            </ListItem>
            <ListItem>
              <ListHeading>Date added</ListHeading>
              <Text>19 April 2021</Text>
            </ListItem>
            <ListItem>
              <ListHeading>Category</ListHeading>
              <Text>Small pet</Text>
            </ListItem>
            <ListItem>
              <ListHeading>Age</ListHeading>
              <Text>9 months</Text>
            </ListItem>
          </DetailsList>
        </Details>
      </DetailsLayout>
    </ContainerLayout>
  );
};

export default PetDetails;
