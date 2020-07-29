import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Col } from "reactstrap";
import '../CSS/results.css';

class Result extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                colors: ['#121212', '#18b64b', '#e68a8c', '#df5f6c', '#dbb593'],
                plotOptions: {
                    bar: {
                        columnWidth: '45%',
                        distributed: true
                    }
                },
                chart: {
                    toolbar: {
                        show: false
                    },
                    id: "basic-bar"
                },
                xaxis: {
                    categories: ["IT", "Computers", "EXTC", "Mechanical", "Civil"]
                }
            },
            series: [
                {
                    name: "Possibilities",
                    data: [100, 40, 45, 50, 49]
                }
            ]
        };
    }

    render() {
        return (
            <div className="app" align="center">
                <Col className="justify-content-center align-items-center">
                    <h1 className="header-title">Results</h1>
                </Col>
                <Col>
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="bar"
                            width="500"
                        />
                    </div>
                </Col>
            </div>
        );
    }
}

export default Result;
