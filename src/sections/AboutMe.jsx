import { Container, Row } from "react-bootstrap"
import me from '../img/pp3.png'
import me2 from '../img/pp1.png'
import { useEffect, useState } from "react";

export const AboutMe = () => {

    const [hovered, setHovered] = useState(false);
    const [prevHovered, setPrevHovered] = useState(false);

    const handleMouseEnter = () => {
        if (!prevHovered) {
        setHovered(true);
        setPrevHovered(true);
        }
        if (hovered){
        setHovered(false)
        }
    };

    const handleMouseLeave = () => {
        setPrevHovered(false);
    };

    return (
        <>
        <Container>
            <Row>

                <div className="p-5 col-lg-12 d-lg-flex justify-content-center align-items-center">
                    <div className="col-lg-8 col-sm-12 p-lg-5">
                        <h1 className="primary fw-bold display-3 my-4">
                            About Me
                        </h1>
                        <p className="lead text-white">
                            
                        </p>
                        <p className="lead text-white">
                            My name is <span className="fw-bold text-warning">Rafael Richie</span>, a passionate web designer and developer. 
                        </p>
                        
                        <p className="lead text-white">
                            I'm currently studying Software Engineering at <span className="fw-bold text-warning">Lithan Academy</span>, where I've gained bold programming skills in both front-end and back-end development. <br />
                            In addition to my studies, I'm also an active independent learner, which has helped me develop my <span className="text-warning fw-bold">coding skills</span>.
                        
                        </p>
                        

                        <p className="lead text-white">
                            I'm enthusiastic about creating user-friendly interfaces along with building <span className="text-warning fw-bold">complex systems</span> for better user experiences and website functionality. <br />
                            My experience includes learning <span className="text-warning fw-bold">Spring Boot</span> and <span class="text-warning fw-bold">ReactJs</span> for building websites, making me proficient in both front-end and back-end development. 
                        </p>

                        <p className="lead text-white">
                            I am really excited to connect with you for potential <span className="fw-bold text-warning">collaborations</span> or <span className="fw-bold text-warning">opportunities</span>. Whether it's web design, web development, or a combination of both, I'm well-equipped to deliver high-quality results.
                        </p>
                    
                    </div>
                    <div className="col-lg-4 col-sm-6 smNone">
                    <img
                        src={hovered ? me2 : me}
                        alt=""
                        className={`col-lg-10 col-sm-12 aboutMeImg ${hovered ? 'hovered' : ''}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                    </div>
                </div>
            </Row>
        </Container>
        </>
    )
}