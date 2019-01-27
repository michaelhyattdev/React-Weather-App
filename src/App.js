import React, { Component } from "react";
import { Card } from "./Card";
import { Search } from "./Search";
import "./App.css";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dtime = new Date();
const day = days[dtime.getDay()];
const APPID = "f2b53e7ee56cee418dca0659c75a0fb8";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: "",
            currentTemp: "",
            highTemp: "",
            lowTemp: "",
            sunrise: "",
            sunset: "",
            windSpeed: "",
            humidity: "",
            cityName: ""
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        let zipCode = document.getElementById("zip").value;

        fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&appid=" + APPID)
            .then(function(response) {
                return response.json();
            })
            .then(data => {
                let sunrise = new Date(0);
                let sunset = new Date(0);
                sunrise.setUTCSeconds(data.sys.sunrise);
                sunset.setUTCSeconds(data.sys.sunset);

                this.setState({
                    icon: data.weather[0].icon,
                    day: day,
                    description: data.weather[0].description,
                    currentTemp: Math.floor(data.main.temp * (9 / 5) - 459.67) + "°F",
                    highTemp: Math.floor(data.main.temp_max * (9 / 5) - 459.67) + "°F",
                    lowTemp: Math.floor(data.main.temp_min * (9 / 5) - 459.67) + "°F",
                    sunrise: sunrise.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true }),
                    sunset: sunset.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true }),
                    windSpeed: data.wind.speed + " MPH",
                    humidity: data.main.humidity + "%",
                    cityName: data.name
                });
            });

        document.querySelector("#container").style.display = "flex";
    }
    render() {
        return (
            <main>
                <Search onClick={this.handleClick} />
                <Card info={this.state} />
            </main>
        );
    }
}

export default App;
