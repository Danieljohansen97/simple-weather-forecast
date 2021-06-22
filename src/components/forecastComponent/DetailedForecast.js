// React
import React from "react";
// Bootstrap
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
// Functions
import isCold from "./functions/isCold";

const DetailedForecast = ({ showModal, handleCloseModal, selectedForecast }) => {

    return (
        <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
            <Modal.Header closeButton>{selectedForecast?.date}</Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                            <h4>Today's weather will be <span className={`text-${isCold(selectedForecast?.tempC)}`}>{selectedForecast?.summary}.</span></h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>The temperature is expected to reach <span className={`text-${isCold(selectedForecast?.tempC)}`}>{selectedForecast?.tempC} °C</span>.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>That would be <span className={`text-${isCold(selectedForecast?.tempC)}`}>{selectedForecast?.tempF} °F</span>.</p>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer className="text-center">
                <Button variant="danger" size="lg" block onClick={handleCloseModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DetailedForecast;
