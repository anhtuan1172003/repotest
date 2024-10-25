import { Row, Col, Card, Button, Tab, Tabs, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import "../style/MainContent.css";

export default function MainContent() {
    const [showingmovies, setShowingmovies] = useState([]);
    const [comingmovies, setComingmovies] = useState([]);

    useEffect(() => {
        //GER - URI: http://localhost:9999/movies
        fetch("http://localhost:9999/movies")
            .then(res => res.json())
            .then(result => setShowingmovies(result))
            .catch(error => console.log(error));
        fetch("http://localhost:9999/comingmovies")
            .then(res => res.json())
            .then(result => setComingmovies(result))
            .catch(error => console.log(error));

    }, []);

    return (
        <Container>
            <Row className="quick-start" sm={2} xs={1} md={4}>
                <Col>
                    <img src="guide.jpg"></img>
                    <p>Hướng dẫn</p>
                </Col>
                <Col>
                    <img src="./image/pay.jpg"></img>
                    <p>Hướng dẫn</p>
                </Col>
                <Col>
                    <img src="./image/ship.jpg"></img>
                    <p>Hướng dẫn</p>
                </Col>
                <Col>
                    <img src="./image/warranty.jpg"></img>
                    <p>Hướng dẫn</p>
                </Col>
            </Row>
        </Container>
    )
}