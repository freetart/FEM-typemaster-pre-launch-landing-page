import styled from "styled-components";
import Button from "./styledElements/Buttons";
import logo from "../images/shared/logo.svg";
import { maxWidthLg, sectionSpacingSm } from "../abstracts/Mixins";

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav-logo {
    width: 5rem;
  }
`;

const Navbar = () => {
  return (
    <nav>
      <Container>
        <img className="nav-logo" src={logo} alt="typemaster logo" />
        <Button secondary href="#!">
          Pre-order Now
        </Button>
      </Container>
    </nav>
  );
};

export default Navbar;
