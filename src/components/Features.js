import styled from "styled-components";
import Feature from "./Feature";
import cardData from "../data";
import { maxWidthXl, sectionSpacingMd } from "../abstracts/Mixins";

const Container = styled.div`
  ${maxWidthXl}
  ${sectionSpacingMd}
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem;
`;

const Features = () => {
  return (
    <section>
      <Container>
        {cardData.map((card) => (
          <Feature
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </Container>
    </section>
  );
};

export default Features;
