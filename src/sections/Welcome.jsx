import { Button, Container, Row } from "react-bootstrap"
import '../styles/Buttons.css'
import * as I from 'react-bootstrap-icons'
import me from '../img/HomeContact.png'
export const Welcome = ({ scrollToAboutMe }) => {

    const handleEmailClick = () => {
        const email = 'rafaelrichie03@gmail.com';
        const subject = 'Hello Rafael!'; // You can set a default subject
        const body = 'Hi Rafael,\n We are interested in hiring you!\n'; // You can set a default body
    
        // Construct the mailto URL
        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
        // Open the default email client
        window.open(mailtoUrl);
      };


    const handleDownloadClick = () => {
        // Assuming your file path is relative to the public directory
        const filePath = process.env.PUBLIC_URL + '/downloads/RafaelRichie-CV.pdf';
        
        // Create an anchor element
        const anchor = document.createElement('a');
        anchor.href = filePath;
        
        // Set the 'download' attribute to initiate download
        anchor.download = 'RafaelRichie-CV.pdf';
        
        // Programmatically click the anchor element
        anchor.click();
      };

    return(
        <>
        <Container>
            <Row>
                <div className="col-lg-12 d-lg-flex welcomeContainer align-items-center justify-content-center">
                    <div className="col-lg-6 col-sm-12 p-lg-5">
                        <img src={me} alt="" className="contactMeImg col-12" onClick={handleEmailClick} style={{ cursor: 'pointer' }}/>
                    </div>
                    <div className="col-lg-6 col-sm-12 ">
                        <p className="display-6 text-white">
                            Hello! I am
                        </p>
                        <h1 className="primary fw-bold display-3">
                            Rafael Richie
                        </h1>
                        <hr />
                        <p className="px18 text-light lead">
                            Fullstack Web Developer  <span className="primary"> | </span> 
                             Front-End Engineer  <span className="primary"> | </span>
                            Back-End Developer  <span className="primary"> | </span>
                            UI/UX Designer
                        </p>
                        <div className="mt-5">
                            <div className="d-lg-flex justify-content-center align-items center">
                                <div className="col-lg-9 col-sm-12">
                                    <Button className="get-started-btn col-12" onClick={handleDownloadClick}>
                                        Download my CV <I.Download className="ms-2 mb-1"/> 
                                    </Button>
                                </div>
                            </div>
                            <div className="d-lg-flex justify-content-center align-items center mt-3">
                                <div className="col-lg-9 col-sm-12">
                                    <Button className="secondary-btn col-12" onClick={scrollToAboutMe}>
                                        Introduction Video <I.PlayCircleFill className="ms-2 mb-1"/> 
                                    </Button>
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
