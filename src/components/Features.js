import styled from "styled-components";
import Feature from "./Feature";
import cardData from "../data";
import {
  maxWidthXl,
  sectionSpacingMd,
  sectionSpacingSm,
} from "../abstracts/Mixins";
import Responsive from "../abstracts/Responsive";

const Container = styled.div`
  ${maxWidthXl}
  ${sectionSpacingMd}
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem;

  ${Responsive.lg`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${Responsive.sm`
    grid-template-columns: 1fr;
    text-align: center;
    ${sectionSpacingSm}
  `}
`;

const Features = () => {
  return (
    <section>
      <Container data-aos="fade-in" data-aos-delay="200">
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
