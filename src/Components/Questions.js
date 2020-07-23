import React from 'react';
import { MDBBtn, MDBCard, MDBRow, MDBView, MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBInput, MDBCol } from 'mdbreact';
import '../question.css'
import questions from '../data/questions.json';
import logo from '../Web_bg.png';

class Questions extends React.Component {
    state = {
        collapsed: false,
        radio: false
    };

    handleTogglerClick = () => {
        const { collapsed } = this.state;
        this.setState({
            collapsed: !collapsed
        });
    };

    onClick = () => {
        this.setState({
            radio: !this.state.radio
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
                <div className="fadeInDown">
                    <MDBNavbar
                        color='secondary-color'
                        style={navStyle}
                        light
                        expand='md'
                        scrolling
                        transparent
                    >
                        <MDBContainer>
                            <MDBNavbarBrand href="/career/">
                                <strong>APSIT Career</strong>
                            </MDBNavbarBrand>
                            <MDBNavbarToggler onClick={this.handleTogglerClick} />
                            <MDBCollapse isOpen={collapsed} navbar>
                                <MDBNavbarNav right>
                                    <MDBNavItem>
                                        <MDBNavLink to='/career/'>Home</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to='/career/dev'>Developers</MDBNavLink>
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
                            <h1 className="display-10 font-weight-bold fadeInDown" style={{ animationDelay: '.2s' }}>QUESTIONS</h1>
                            <MDBCard style={{ width: "100%" }}>
                                {questions.map((question, index) => {
                                    return (
                                        <div className="card fadeInDown" style={{ animationDelay: '.4s' }}>
                                            <h4>Q{index + 1}. {question.question}</h4>
                                            {/* <MDBCardBody>
                                                <MDBCardTitle>Q{index + 1}. {question.question}</MDBCardTitle>
                                            </MDBCardBody> */}
                                            {/* <MDBInput onClick={this.onClick} checked={this.state.radio} label="Strongly Agree" type="radio" id="option1" size="xs" /> */}
                                            <hr></hr>
                                        </div>
                                    );
                                })}
                            </MDBCard>
                            <div className="send-btn fadeInDown" style={{ animationDelay: '1s' }}>
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