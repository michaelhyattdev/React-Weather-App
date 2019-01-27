import React, { Component } from "react";

export class Card extends Component {
    render() {
        const data = this.props.info;
        return (
            <div id="container">
                <div id="weatherInfo">
                    <div className="day">
                        <span className="label">Today</span>
                        <h4 id="day">{data.day}</h4>
                        <img id="icon" src={"/images/" + data.icon + ".png"} alt="" />
                        <span className="label">{data.description}</span>
                        <h5 id="temperature">{data.currentTemp}</h5>
                        <div className="largeContainer">
                            <div className="smallContainer">
                                <span className="label">High</span>
                                <span id="highTemp" className="subText">
                                    {data.highTemp}
                                </span>
                                <span className="label">Sunrise</span>
                                <span id="sunrise" className="subText">
                                    {data.sunrise}
                                </span>
                                <span className="label">Humidity</span>
                                <span id="humidity" className="subText">
                                    {data.humidity}
                                </span>
                            </div>
                            <div className="smallContainer">
                                <span className="label">Low</span>
                                <span id="lowTemp" className="subText">
                                    {data.lowTemp}
                                </span>
                                <span className="label">Sunset</span>
                                <span id="sunset" className="subText">
                                    {data.sunset}
                                </span>
                                <span className="label">Wind Speed</span>
                                <span id="windSpeed" className="subText">
                                    {data.windSpeed}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="cityInfo">
                    <h1 id="cityName">{data.cityName}</h1>
                </div>
            </div>
        );
    }
}
