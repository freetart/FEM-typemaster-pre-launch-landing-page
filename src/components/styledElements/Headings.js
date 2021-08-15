import styled from "styled-components";
import { headingStyles } from "../../abstracts/Mixins";

export const HeroHeading = styled.h1`
  ${headingStyles}
  font-size: 5.6rem;
  color: var(--secondary-300);
  text-transform: uppercase;
`;

export const SubHeading = styled.h2`
  ${headingStyles}
  font-size: 3.2rem;
  color: var(--secondary-300);
  text-transform: uppercase;
`;

export const FeatureHeading = styled.h2`
  ${headingStyles}
  font-size: 2.4rem;
  color: var(--secondary-300);
  text-transform: uppercase;
  padding: 1rem 0;
`;
