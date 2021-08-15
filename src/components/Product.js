import styled from "styled-components";
import productImgOne from "../images/desktop/image-phone-and-keyboard.jpg";
import productImgTwo from "../images/desktop/image-glass-and-keyboard.jpg";
import { SubHeading } from "./styledElements/Headings";
import { Paragraph } from "./styledElements/Paragraphs";
import { sectionSpacingSm, maxWidthLg } from "../abstracts/Mixins";
import bgPattern from "../images/shared/pattern-square.svg";

const Container = styled.div`
  ${sectionSpacingSm}
  ${maxWidthLg}
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 5rem;
  position: relative;

  .hero-bg-pattern {
    position: absolute;
    width: 20%;
    bottom: 7%;
    left: -25%;
  }

  .product-img {
    height: 60rem;
    width: 100%;
    border-radius: var(--mainRadius);
  }

  .product-img--one {
    background: linear-gradient(
        hsla(22, 89%, 52%, 0.5),
        hsla(22, 89%, 52%, 0.5)
      ),
      url(${productImgOne}) center center/cover no-repeat;
  }

  .product-img--two {
    background: url(${productImgTwo}) center center/cover no-repeat;
  }

  .product-info {
    padding: 5rem 0;
  }
`;

const Product = () => {
  return (
    <section>
      <Container>
        <img className="hero-bg-pattern" src={bgPattern} alt="" />
        <div className="product-img product-img--one"></div>
        <div className="product-img product-img--two"></div>
        <div className="product-info">
          <SubHeading>Mechanical wireless keyboard</SubHeading>
          <Paragraph>
            The Typemaster keyboard boasts top-notch build and practical design.
            It offers a wide variety of switches and keycaps, along with
            reliable wireless connectivity.
          </Paragraph>
        </div>
      </Container>
    </section>
  );
};

export default Product;
