import React, { Component } from 'react';
import {Container, Jumbotron} from 'reactstrap';
import chartjs from 'react-chartjs';
import logo from './logo.svg';
import './App.css';

const Banner = props => (
    <Jumbotron className="page-header panel panel-default">
        <h2>Dracut Weather</h2>
    </Jumbotron>
);

class TemperatureChart extends Component {
    constructor(props) {
        super();
        this.state = {
            data: {
                labels: [],
                datasets: [{
                    label: '',
                    data: [],
                    backgroundColor: [],
                    borderColor: [],
                    borderWidth: 1
                }]
            }
        };
    }

    render() {
        return (
            <chartjs.Line data={this.props.data} />
        );
    }
}

class App extends Component {
    constructor(props) {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch("https://thundering-turtle.glitch.me/forecast?city=Dracut,ma,us")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    status: json.status,
                    forecast: json.data
                });
            });
    }

    render() {
        return (
            <div className="App">
                <Banner />
                <TemperatureChart data={this.state.forecast} />
            </div>
        );
    }
}

export default App;
