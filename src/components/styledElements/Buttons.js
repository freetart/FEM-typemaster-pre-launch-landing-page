import styled, { css } from "styled-components";
import { headingStyles } from "../../abstracts/Mixins";

const Button = styled.a`
  ${headingStyles}
  padding: 2rem;
  font-size: 1.6rem;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: var(--mainRadius);
  transition: var(--mainTransition);

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: var(--secondary-100);
      color: var(--secondary-300);

      &:hover,
      &:focus {
        color: var(--secondary-100);
        background-color: var(--secondary-300);
      }
    `}
`;

export default Button;
