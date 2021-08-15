import styled from "styled-components";
import { HeroHeading } from "./styledElements/Headings";
import { Lead } from "./styledElements/Paragraphs";
import Button from "./styledElements/Buttons";
import HeroImg from "../images/desktop/image-keyboard.jpg";
import bgPattern from "../images/shared/pattern-square.svg";
import { headingStyles } from "../abstracts/Mixins";
import { maxWidthLg, sectionSpacingSm } from "../abstracts/Mixins";
import Responsive from "../abstracts/Responsive";

const Header = styled.header`
  overflow: hidden;
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 5rem;
  position: relative;

  ${Responsive.md`
    grid-template-columns: 1fr;
  `}

  ${Responsive.sm`
    text-align: center;
  `}

  .hero-cta {
    display: flex;
    align-items: center;
    gap: 3rem;

    ${Responsive.sm`
      flex-direction: column;
    `}
  }

  .hero-date {
    ${headingStyles}
    font-size: 1.6rem;
    color: var(--secondary-200);
    text-transform: uppercase;
  }

  .hero-img {
    border-radius: var(--mainRadius);
  }

  .hero-bg-pattern {
    position: absolute;
    width: 20%;
    top: 7%;
    right: -25%;
  }
`;

const Hero = () => {
  return (
    <Header>
      <Container>
        <div className="hero-info">
          <HeroHeading data-aos="fade-up">Typemaster keyboard</HeroHeading>
          <Lead data-aos="fade-up" data-aos-delay="100">
            Improve your productivity and gaming without breaking the bank.
            Upgrade to a high quality mechanical typing experience.
          </Lead>
          <div className="hero-cta" data-aos="fade-up" data-aos-delay="200">
            <Button primary>Pre-order Now</Button>
            <p className="hero-date">Release on 5/27</p>
          </div>
        </div>
        <img
          className="hero-img"
          src={HeroImg}
          alt="typemaster keyboard"
          data-aos="fade-in"
          data-aos-delay="300"
        />
        <img className="hero-bg-pattern" src={bgPattern} alt="" />
      </Container>
    </Header>
  );
};

export default Hero;
