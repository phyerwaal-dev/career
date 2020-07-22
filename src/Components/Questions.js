import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBFooter, MDBRow, MDBView, MDBContainer, MDBCol, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavItem, MDBNavLink } from 'mdbreact';
import '../question.css'
import questions from '../data/questions.json';
import logo from '../Web_bg.png';

class Questions extends React.Component {
    state = {
        collapsed: false,
        radio: 0
    };

    handleTogglerClick = () => {
        const { collapsed } = this.state;
        this.setState({
            collapsed: !collapsed
        });
    };

    onClick = (nr) => () => {
        this.setState({
            radio: nr
        });
    }

    componentDidMount() {
        document.querySelector('nav').style.height = '65px';
    }

    componentWillUnmount() {
        document.querySelector('nav').style.height = 'auto';
    }

    render() {
        const { collapsed } = this.state;
        const navStyle = { marginTop: '2rem' };
        const overlay = (
            <div
                id='sidenav-overlay'
                style={{ backgroundColor: 'white' }}
                onClick={this.handleTogglerClick}
            />
        );
        return (
            <div id="questions">
                <div>
                    <MDBNavbar
                        color='secondary-color'
                        style={navStyle}
                        light
                        expand='md'
                        scrolling
                        transparent
                    >
                        <MDBContainer>
                            <MDBNavbarBrand href="/">
                                <strong>APSIT Career</strong>
                            </MDBNavbarBrand>
                            <MDBNavbarToggler onClick={this.handleTogglerClick} />
                            <MDBCollapse isOpen={collapsed} navbar>
                                <MDBNavbarNav right>
                                    <MDBNavItem active>
                                        <MDBNavLink to='#!'>About Us</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to='/dev'>Developers</MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBContainer>
                    </MDBNavbar>
                    {collapsed && overlay}
                </div>
                <MDBView src={logo}>
                    <MDBContainer
                        style={{ height: '100%', width: '100%', paddingTop: '5rem' }}
                        className='d-flex justify-content-center align-items-center'>
                        <MDBRow>
                            <h1 className="display-10 font-weight-bold">QUESTIONS</h1>
                            <MDBCard style={{ width: "100%" }}>
                                {questions.map((question, index) => {
                                    return (
                                        <div className="card">
                                            <MDBCardBody>
                                                <MDBCardTitle>Q{index + 1}. {question.question}</MDBCardTitle>
                                            </MDBCardBody>
                                            <hr></hr>
                                        </div>
                                    );
                                })}
                            </MDBCard>
                            <div className="send-btn">
                                <MDBBtn color="success" >SEND ANSWER</MDBBtn>
                            </div>
                        </MDBRow>
                    </MDBContainer>
                </MDBView>
            </div>
        )
    }
}

export default Questions;