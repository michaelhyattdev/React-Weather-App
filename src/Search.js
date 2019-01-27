import React, { Component } from "react";

const errorStyle = {
    color: "red"
};
const normalStyle = {
    color: "white"
};

export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: "",
            input: "",
            status: "Enter Zipcode:",
            statusStyle: normalStyle
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            input: e.target.value,
            status: "Enter Zipcode:",
            statusStyle: normalStyle
        });
    }
    handleClick() {
        var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(this.state.input);

        if (isValidZip) {
            this.props.onClick(this.state.input);
        } else {
            this.setState({
                status: "Please enter a valid Zipcode.",
                statusStyle: errorStyle
            });
        }
    }
    render() {
        return (
            <div id="search">
                <span id="searchStatus" style={this.state.statusStyle}>
                    {this.state.status}
                </span>
                <div id="innerSearch">
                    <input id="zip" type="text" size="15" onChange={this.handleChange} value={this.state.input} />
                    <button onClick={this.handleClick}>Get Weather</button>
                </div>
            </div>
        );
    }
}
