import styled from "styled-components";
import productImgOne from "../images/desktop/image-phone-and-keyboard.jpg";
import productImgTwo from "../images/desktop/image-glass-and-keyboard.jpg";
import { SubHeading } from "./styledElements/Headings";
import { Paragraph } from "./styledElements/Paragraphs";
import { sectionSpacingSm, maxWidthLg } from "../abstracts/Mixins";
import bgPattern from "../images/shared/pattern-square.svg";
import Responsive from "../abstracts/Responsive";

const Container = styled.div`
  ${sectionSpacingSm}
  ${maxWidthLg}
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 5rem;
  position: relative;

  ${Responsive.md`
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
    gap: 2rem;
  `}

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

    ${Responsive.sm`
      height: 30rem;
    `}
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

    ${Responsive.md`
      padding: 2rem 0;
      grid-column: span 2;
      grid-row: span 2;
    `}
  }
`;

const Product = () => {
  return (
    <section>
      <Container>
        <img className="hero-bg-pattern" src={bgPattern} alt="" />
        <div className="product-img product-img--one" data-aos="fade-in"></div>
        <div
          className="product-img product-img--two"
          data-aos="fade-in"
          data-aos-delay="200"
        ></div>
        <div className="product-info">
          <SubHeading data-aos="fade-up">
            Mechanical wireless keyboard
          </SubHeading>
          <Paragraph data-aos="fade-up" data-aos-delay="300">
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
