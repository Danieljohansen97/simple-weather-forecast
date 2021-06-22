// React
import React, { useState } from "react";
// Components
import ForecastItem from "./ForecastItem";
import DetailedForecast from "./DetailedForecast";
// Hooks
import useFetch from "./hooks/useFetch"
// Bootstrap
import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"

const ForecastList = () => {
    const URL = "https://weather-tbxkc.ondigitalocean.app/WeatherForecast";
    const result = useFetch(URL);
    const [selectedForecast, setSelectedForecast] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            <Container>
                <Jumbotron className="text-center">
                    <h1>Weather Forecasts</h1>
                </Jumbotron>
                {result && result.map((item) => {
                    return (
                        <ForecastItem
                            key={`${item.id}`}
                            date={item.date}
                            tempC={item.temperatureC}
                            tempF={item.temperatureF}
                            summary={item.summary}
                            setSelectedForecast={setSelectedForecast}
                            handleShowModal={handleShowModal}
                        />
                    )
                })}
            </Container>
            <DetailedForecast
                showModal={showModal}
                handleCloseModal={handleCloseModal}
                selectedForecast={selectedForecast}
            />
        </>
    )
}

export default ForecastList;