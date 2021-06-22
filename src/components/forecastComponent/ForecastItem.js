// React
import React from "react";
// Bootstrap
import Card from "react-bootstrap/Card";
import { SunFill, Snow } from "react-bootstrap-icons";
// Functions
import isCold from "./functions/isCold";

const ForecastItem = ({
    date,
    tempC,
    tempF,
    summary,
    setSelectedForecast,
    handleShowModal
}) => {
    const handleClick = () => {
        setSelectedForecast({ date, tempC, tempF, summary });
        handleShowModal();
    }
    return (
        <Card bg="dark" text="light" className="mb-2 card-cursor" onClick={() => handleClick()}>
            <Card.Header>
                <Card.Title>{date}</Card.Title>
            </Card.Header>
            <Card.Body>
                <h4>
                    {isCold(tempC) === "primary" ? <Snow className="text-primary" /> : <SunFill className="text-danger" />}
                </h4>
                <p>{`${tempC} °C ${summary}`}</p>
            </Card.Body>
        </Card>
    )
}

export default ForecastItem;