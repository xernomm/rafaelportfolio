import React from "react";
import { Container, Row } from "react-bootstrap";

export const IntroVid = React.forwardRef((props, ref) =>
{
    return (
        <div ref={ref}>
        <Container>
            <Row>
                <div className="col-lg-12 d-lg-flex justify-content-center align-items-center">
                    <div className="col-lg-5 col-sm-12 p-5 d-flex justify-content-center align-items-center">
                        <h1 className="primary fw-bold display-3">
                            My Introduction <br />
                            Video.
                        </h1>
                    </div>
                    <div className="col-lg-7 col-sm-12 p-4 d-flex justify-content-center align-items-center">
                        <iframe width="100%" 
                        height="415" 
                        src="https://www.youtube.com/embed/MAMQ9DTyHTw?si=AQbtWgNZXQgvId34" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen 
                        className="border border-dark rounded rounded-5 introVid"
                        />
                    </div>
                </div>
            </Row>
        </Container>
        </div>
    )
})