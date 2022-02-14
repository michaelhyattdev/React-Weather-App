import React, { Component } from "react";
import { Card } from "./Card";
import "./App.css";

const KEY = process.env.REACT_APP_OWM_KEY;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }
    componentDidMount() {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=29.503421&lon=-98.66791&exclude=minutely,hourly&appid=${KEY}&units=imperial`)
        .then(data => console.log(data));
    }
    render() {
        return (
            <main>
                <Card info={this.state} />
            </main>
        );
    }
}

export default App;
