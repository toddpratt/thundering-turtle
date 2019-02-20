import React, { Component } from 'react';
import { Container, Jumbotron } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'


const Banner = props => (
    <Jumbotron className="page-header panel panel-default">
        <h2>Dracut Weather</h2>
    </Jumbotron>
);

class BaseChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getValue(val) {
    }

    getData() {
        if (!this.props.data) return null;

        const data = [];
        const temps = this.props.data.list;
        temps.forEach(val => {
            const key = val.dt_txt;
            const value = this.getValue(val);
            data.push([key, value])
        });

        return data;
    }

}

class TemperatureChart extends BaseChart {
    render() {
        return (
            <div>
                <div>Temperature</div>
                <LineChart data={this.getData()}
                    height="600px" min={null} suffix="&#x2109;" />
            </div>
        );
    }

    getValue(val) {
        return val.main.temp;
    }
}

class HumidityChart extends BaseChart {
    render() {
        return (
            <div>
                <div>Humidity</div>
                <LineChart data={this.getData()}
                    height="600px" min={null} suffix="%" />
            </div>
        );
    }

    getValue(val) {
        return val.main.humidity;
    }
}

class WindSpeedChart extends BaseChart {
    render() {
        return (
            <div>
                <div>Wind Speed</div>
                <LineChart data={this.getData()}
                    height="600px" min={null} suffix="MPH" />
            </div>
        );
    }

    getValue(val) {
        return val.wind.speed;
    }
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        setInterval(this.updateForecast, 10000)
    }

    updateForecast() {
        fetch("https://thundering-turtle.glitch.me/forecast?city=Dracut,ma,us")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    status: json.status,
                    forecast: json.data
                });
            });
    }

    componentDidMount() {
        this.updateForecast();
    }

    render() {
        return (
            <div className="App">
                <Banner />
                <TemperatureChart data={this.state.forecast} />
                <HumidityChart data={this.state.forecast} />
                <WindSpeedChart data={this.state.forecast} />
            </div>
        );
    }
}

export default App;
