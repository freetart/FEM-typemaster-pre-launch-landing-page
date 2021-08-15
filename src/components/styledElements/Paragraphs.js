import styled from "styled-components";
import { textStyles } from "../../abstracts/Mixins";

export const Lead = styled.p`
  ${textStyles}
  font-size: 1.8rem;
  color: var(--secondary-200);
  padding: 2rem 0;
`;

export const Paragraph = styled(Lead)`
  font-size: 1.6rem;
`;
