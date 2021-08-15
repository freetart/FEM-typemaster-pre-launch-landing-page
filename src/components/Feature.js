import styled from "styled-components";
import { FeatureHeading } from "./styledElements/Headings";
import { Paragraph } from "./styledElements/Paragraphs";

const Container = styled.div`
  .feature-icon-container {
    background-color: var(--primary-200);
    width: fit-content;
    padding: 2rem;
    border-radius: var(--mainRadius);
  }

  .feature-icon:nth-child(even) {
    width: 2rem;
  }
`;

const Feature = ({ icon, title, description }) => {
  return (
    <article>
      <Container>
        <div className="feature-icon-container">
          <img className="feature-icon" src={icon} alt="icon" />
        </div>
        <FeatureHeading>{title}</FeatureHeading>
        <Paragraph>{description}</Paragraph>
      </Container>
    </article>
  );
};

export default Feature;
