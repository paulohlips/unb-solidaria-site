import React from "react";
import "./styles.css";
import Image from "../../elements/Image";

const Equipe = ({ className }) => {
    return (
        <section className="box">
            <div>
                <h3
                    className="mt-0 mb-16 reveal-from-bottom title"
                    data-reveal-delay="200"
                >
                    <p className="text-color-primary">Nossa Equipe</p>
                </h3>
            </div>
            <div class="profiles-container">
                <div class="profile">
                    <Image
                        src={require("./../../../assets/images/profile.png")}
                        alt="Hero"
                        width={100}
                        height={200}
                    />
                    <span>Paulo Henrique Ferreira</span>
                    <span>Engenheiro de Redes</span>
                    <span>ENE/FT/UNB</span>
                </div>

                <div class="profile">
                    <Image
                        src={require("./../../../assets/images/paulo.jpg")}
                        alt="Hero"
                        width={100}
                        height={200}
                    />
                    <span>Paulo Henrique Ferreira</span>
                    <span>Engenheiro de Redes</span>
                    <span>ENE/FT/UNB</span>
                </div>
            </div>
        </section>
    );
};

export default Equipe;
