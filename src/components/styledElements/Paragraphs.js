import styled from "styled-components";
import {
  textStyles,
  sectionSpacingSm,
  headingStyles,
} from "../../abstracts/Mixins";

export const Lead = styled.p`
  ${textStyles}
  font-size: 1.8rem;
  color: var(--secondary-200);
  padding: 2rem 0;
`;

export const Paragraph = styled(Lead)`
  font-size: 1.6rem;
`;

export const Copyright = styled(Lead)`
  ${sectionSpacingSm}
  text-align: center;

  span {
    ${headingStyles}
  }
`;
