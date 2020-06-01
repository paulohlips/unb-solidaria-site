import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";

const propTypes = {
    ...SectionProps.types,
};

const defaultProps = {
    ...SectionProps.defaults,
};

const Hero = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {
    const [videoModalActive, setVideomodalactive] = useState(false);
    const [EquipeModalActive, setEquipemodalactive] = useState(false);

    const openModal = (e) => {
        e.preventDefault();
        setVideomodalactive(true);
    };

    const closeModal = (e) => {
        e.preventDefault();
        setVideomodalactive(false);
    };

    const openEquipeModal = (e) => {
        e.preventDefault();
        setEquipemodalactive(true);
    };

    const closeEquipeModal = (e) => {
        e.preventDefault();
        setEquipemodalactive(false);
    };

    const outerClasses = classNames(
        "hero section center-content",
        topOuterDivider && "has-top-divider",
        bottomOuterDivider && "has-bottom-divider",
        hasBgColor && "has-bg-color",
        invertColor && "invert-color",
        className
    );

    const innerClasses = classNames(
        "hero-inner section-inner",
        topDivider && "has-top-divider",
        bottomDivider && "has-bottom-divider"
    );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <p  className="text-color-primary">SOS UnB</p> contra a Covid-19
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Um ecossitema pensado para proteger da epidemia global causada pela Covid-19 todos aqueles que integram a comunidade da Universidade de Brasília.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://googleplay.com">
                    Baixar o Aplicativo
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/cruip/open-react-template/">
                    Seja Parceiro
                    </Button>
                </ButtonGroup>
              </div>
            </div>
        </section>
    );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
