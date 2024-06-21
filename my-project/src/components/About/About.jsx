import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";

const About = () => {
    return (
        <section id="about">
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="" className="about-img" />
            </div>
            <div className="about-right">
                <h3>Reliance Industries Limited</h3>
                <p>
                    Reliance Industries Limited is an Indian multinational conglomerate headquartered in Mumbai.
                    Its businesses include energy, petrochemicals, natural gas, retail, entertainment, telecommunications,
                    mass media, and textiles. Reliance is the largest public company in India by market capitalisation
                    and revenue, and the 100th largest company worldwide.
                </p>
                <p>
                    Reliance Jio Infocomm Limited (RJIL), a subsidiary of Reliance Industries Limited (RIL),
                    India’s largest private sector company, is the first telecom operator to hold pan India Unified License.
                    This license authorises RJIL to provide all telecommunication services except Global Mobile Personal
                    Communication by Satellite Service.
                </p>
                <p>
                    RIL is a major telecommunications company. It provides mobile,
                    landline, and broadband services, investing in network infrastructure and expanding services to rural areas. Through mergers and
                    innovations, it adapted to industry changes, but its status may have evolved since 2022.
                </p>
            </div>
        </div>
        </section>
    );
};

export default About;
