import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";
import imgCourse1 from "../../assets/img/WordPress-Logo.png";
import imgCourse2 from "../../assets/img/Prestashop.png";
import imgCourse3 from "../../assets/img/react-1-logo.png";
import CardService from "./CardService/CardService";

export default function Services() {
    const servicesArray = [
        {
            title: "Wordpress Course",
            subtitle: "Lear all about this great CMS",
            image: imgCourse1,
            footer: "Go to the course ➡️",
            link: "https://www.udemy.com/course/the-complete-wordpress-developer-course-w/",
        },
        {
            title: "Prestashop Course",
            subtitle: "Lear all about this great CMS",
            image: imgCourse2,
            footer: "Go to the course ➡️",
            link: "https://www.udemy.com/course/learn-how-to-build-an-e-commerce-web-site-by-prestashop/    ",
        },
        {
            title: "React Course",
            subtitle: "Lear all about this great CMS",
            image: imgCourse3,
            footer: "Go to the course ➡️",
            link: "https://www.udemy.com/course/react-basic-in-just-1-hour/",
        },
    ];

    return (
        <div className="services p-4 mt-5">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <h2 className="text-center">Services</h2>
                        <h4 className="pb-3 text-center">
                            Check some of my services that i did
                        </h4>
                        <Row xs={1} md={3} className="g-4 mt-4">
                            {servicesArray.map((service, index) => (
                                <CardService service={service} key={index} />
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}