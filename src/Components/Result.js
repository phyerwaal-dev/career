import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Col } from "reactstrap";
import { connect } from 'react-redux';
import '../CSS/results.css';

const Result = ({ options, res, series }) => {
    const [result, setResult] = useState();
    console.log(options);
    console.log(series);
    return (
        <div className="app" align="center">
            <Col className="justify-content-center align-items-center">
                <h1 className="header-title">Results</h1>
            </Col>
            <Col>
                <div className="mixed-chart">
                    <Chart
                        options={options}
                        series={series}
                        type="bar"
                        width="500"
                    />
                </div>
            </Col>
        </div>
    );
}

const mapStateToProps = (state) => ({
    // res: state.res,
    options: state.options,
    series: state.series
});

export default connect(mapStateToProps)(Result);
