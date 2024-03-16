import { Button, Container, Row } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';
import ytp from '../img/Youthopedia-team-UPSI.jpg'
import rpg from '../img/rpg.jpeg'

export const Experiences = () => {
    return (
        <>
        <Container>
            <Row>
                <div className="p-5">
                    <h1 className="display-3 fw-bold primary mb-5">
                        Experiences
                    </h1>
                    <div className="d-flex col-12 justify-content-center align-items center">
                        <div>
                        <div id="expcontent" className="d-lg-flex justify-content-center align-items-center col-12">
                        <div className=" text-white col-lg-6 col-sm-12">
                        <p className="lead fw-bold">1. RPG VENTURES <span className="lead fw-bold"> (2023)</span></p>
                        <ul>
                            
                            <li>
                            <p className=""><span className="fw-bold">Position: </span> Junior Developer/Data Manager</p>
                            </li>
                            <li>
                            <p><span className="fw-bold">Description: </span>At RPG Ventures, I played a key role in leveraging modern data tools and technologies to streamline and enhance data processes. My responsibilities included:</p>
                            <ul>
                                <li>
                                <small className="fw-bold">DBT Pipelines</small> <br />
                                </li>
                                <li>
                                <small className="fw-bold">Google Apps Script</small> <br />
                                </li>
                                <li>
                                <small className="fw-bold">BigQuery</small> <br />
                                </li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                        <div className="col-lg-6 col-sm-12 text-white">
                        <ul>
                            <li className="">
                            <p><span className="fw-bold">Key Achievements: </span></p>
                            <ul>
                                <li>
                                <small className="fw-bold">Successfully implemented a series of dbt models, improving the accuracy and reliability of analytical reports.</small>
                                </li>
                                <li>
                                <small className="fw-bold">Developed and deployed Google Apps Script solutions, resulting in a significant reduction in manual data entry and processing time.</small>
                                </li>
                                <li>
                                <small className="fw-bold">Optimized BigQuery queries, leading to faster data retrieval and improved overall system performance.</small>
                                </li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                    </div>

                    <div id="expcontent2" className="d-lg-flex justify-content-center align-items-center col-12 mt-5">
                        <div className="text-white col-lg-6 col-sm-12">
                        <p className="lead fw-bold">2. Youthopia <span className="lead fw-bold"> (2024)</span></p>
                        <ul>
                            <li>
                            <p className=""><span className="fw-bold">Position: </span> Junior Full-Stack Web Developer</p>
                            </li>
                            <li>
                            <p><span className="fw-bold">Description: </span>At Youthopia, I played a key role in building websites starting from front-end to back-end. My responsibilities included:</p>
                            <ul>
                                <li>
                                <small className="fw-bold">ReactJs</small> <br />
                                </li>
                                <li>
                                <small className="fw-bold">NodeJs</small> <br />
                                </li>
                                <li>
                                <small className="fw-bold">SQL</small> <br />
                                </li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                        <div className="col-lg-6 col-sm-12 text-white">
                        <ul>
                            <li className="">
                            <p><span className="fw-bold">Key Achievements: </span></p>
                            <ul>
                                <li>
                                <small className="fw-bold">Successfully implemented view pages using ReactJS and NodeJs</small>
                                </li>
                                <li>
                                <small className="fw-bold">Fulfilling and pleased employer's needs</small>
                                </li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </Row>
        </Container>
        </>
    )
}