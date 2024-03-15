import { Container, Row } from "react-bootstrap"

import reactLogo from '../img/reactlogo.png';
import nodeLogo from '../img/nodejslogo.svg';
import springBootLogo from '../img/springlogo.svg';
import javaLogo from '../img/java.svg';
import sqlLogo from '../img/sql.png';
import githubLogo from '../img/iconmonstr-github-1.svg';
import htmlLogo from '../img/html.svg';
import cssLogo from '../img/css.svg';
import jsLogo from '../img/js.png';
import jqueryLogo from '../img/jquery.svg';
import bootstrapLogo from '../img/bootstrap-logo.svg';
import dbtLogo from '../img/dbt-seeklogo.svg';
import appsheetLogo from '../img/appsheet-vector-logo-2022.svg';
import powerbiLogo from '../img/powerbi.svg';
import liferayLogo from '../img/liferay.svg';
import photoshopLogo from '../img/adobe-photoshop-logo-2021.svg';
import adobeMixLogo from '../img/mix.png';
import kinemasterLogo from '../img/kinemaster.png';
import capcutLogo from '../img/capcut.png';
import axureLogo from '../img/axure-2.svg';
import canvaLogo from '../img/canva.svg';

export const TechnicalSkills = () => {

    const skillSets = [
        { image: reactLogo, name: 'ReactJs' },
        { image: nodeLogo, name: 'Node.js' },
        { image: springBootLogo, name: 'Spring Boot' },
        { image: javaLogo, name: 'Java' },
        { image: sqlLogo, name: 'SQL' },
        { image: githubLogo, name: 'GitHub' },
        { image: htmlLogo, name: 'HTML' },
        { image: cssLogo, name: 'CSS' },
        { image: jsLogo, name: 'JavaScript' },
        { image: jqueryLogo, name: 'jQuery' },
        { image: bootstrapLogo, name: 'Bootstrap' },
        { image: dbtLogo, name: 'DBT Pipelines' },
        { image: appsheetLogo, name: 'AppSheet' },
        { image: powerbiLogo, name: 'Power BI' },
        { image: liferayLogo, name: 'Liferay' },
        { image: photoshopLogo, name: 'Photoshop' },
        { image: adobeMixLogo, name: 'Photoshop Mix' },
        { image: kinemasterLogo, name: 'Kinemaster' },
        { image: capcutLogo, name: 'CapCut' },
        { image: axureLogo, name: 'Axure' },
        { image: canvaLogo, name: 'Canva' },
      ];

    return (
        <>
        <Container>
            <Row>
                <div className="p-5">
                    <h1 className="display-3 primary fw-bold mb-5">
                        Skillsets
                    </h1>
                    <div className="skillsets">
                        {skillSets.map((skill, index) => (
                        <div className="skill" key={index}>
                            <div className="skillBg">
                            <img src={skill.image} alt={skill.name} className="skillImage" />
                            </div>
                            <p className="text-white lead skillName">{skill.name}</p>
                        </div>
                        ))}
                    </div>  
                </div>
            </Row>
        </Container>
        </>
);
}