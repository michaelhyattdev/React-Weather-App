import React, { Component } from "react";

export class Search extends Component {
    render() {
        return (
            <div id="search">
                <span id="searchStatus">Enter Zipcode:</span>
                <div id="innerSearch">
                    <input id="zip" type="text" size="15" />
                    <button onClick={this.props.onClick}>Get Weather</button>
                </div>
            </div>
        );
    }
}
