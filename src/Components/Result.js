import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Col } from "reactstrap";
import { connect } from "react-redux";
import "../CSS/results.css";
import { MDBLink, MDBBtn } from "mdbreact";

const Result = ({ options, series }) => {
  const [result, setResult] = useState();
  // console.log(options);
  return (
    <div className='app' align='center'>
      <Col className='justify-content-center align-items-center'>
        <h1 className='header-title'>Results</h1>
      </Col>
      <Col>
        <div className='mixed-chart'>
          {series ? (
            <Chart options={options} series={series} type='bar' width='500' />
          ) : null}
        </div>
        <p align='center'>
          In the above graph, the probability has been calculated according to
          your answers.
        </p>
        <p align='center'>Please check all the probabilities.</p>
        <MDBLink to='/'>
          <MDBBtn color='success'>HOME</MDBBtn>
        </MDBLink>
      </Col>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // res: state.res,
  options: state.options,
  series: state.series,
});

export default connect(mapStateToProps)(Result);
