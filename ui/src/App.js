import React, { Component } from 'react';
import { Container, Jumbotron } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'


const NotReadyYet = props => {
    return (
        <Jumbotron className="page-header panel panel-default">
            <h2>Fetching Data...</h2>
        </Jumbotron>
    );
}

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var bannerText = "Weather: New York...";

        if (this.props.data) {
            bannerText = "Weather: " + this.props.data.city.name;
        };

        console.log(this.props);
        return (
            <Jumbotron className="page-header panel panel-default">
                <h2>{bannerText}</h2>
            </Jumbotron>
        );
    }
}

class BaseChart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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

const ChartPanel = props => (
    <div className="panel panel-default chart-container">
        <div className="panel-heading"><h3>Temperature</h3></div>
        <div className="panel-body">
            {props.children}
        </div>
    </div>
);

class TemperatureChart extends BaseChart {
    render() {
        return (
            <ChartPanel>
                <LineChart data={this.getData()}
                    height="600px" min={null} suffix="&#x2109;" />
            </ChartPanel>
        );
    }

    getValue(val) {
        return val.main.temp;
    }
}

class HumidityChart extends BaseChart {
    render() {
        return (
            <ChartPanel>
                <LineChart data={this.getData()}
                    height="600px" min={null} suffix="%" />
            </ChartPanel>
        );
    }

    getValue(val) {
        return val.main.humidity;
    }
}

class WindSpeedChart extends BaseChart {
    render() {
        return (
            <ChartPanel>
                <LineChart data={this.getData()}
                    height="600px" min={null} suffix="MPH" />
            </ChartPanel>
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
        this.updateForecast = this.updateForecast.bind(this);
    }

    updateForecast() {
        fetch("https://thundering-turtle.glitch.me/forecast?city=New+York,ny,us")
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
        setInterval(this.updateForecast, 300000)
    }

    render() {
        if (this.state.forecast) {
            return (
                <div className="container">
                    <div className="App col-md12">
                        <Banner data={this.state.forecast} />
                        <TemperatureChart data={this.state.forecast} />
                        <HumidityChart data={this.state.forecast} />
                        <WindSpeedChart data={this.state.forecast} />
                    </div>
                </div>
            );
        } else {
            return <NotReadyYet />
        }
    }
}

export default App;
