import React from 'react';
import '../CSS/userdetails.css';
import { Row, Col, Form } from 'react-bootstrap';
import { MDBBtn, MDBNavItem, MDBContainer, MDBNavbarBrand, MDBNavbarToggler, MDBNavbar, MDBNavLink, MDBCollapse, MDBNavbarNav } from 'mdbreact';
import { connect } from 'react-redux';

class UserDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            collapsed: false,
            name: "",
            email: ""
        }

        this.changeHandler = this.changeHandler.bind(this);
        this.send = this.send.bind(this);
    }

    handleTogglerClick = () => {
        const { collapsed } = this.state;
        this.setState({
            collapsed: !collapsed,
        });
    };

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    send = async (event) => {
        console.log("Name: ", this.state.name);
        console.log("Email: ", this.state.email);
        event.preventDefault();
        let add = [{
            name: this.state.name,
            email: this.state.email
        }]
        await this.props.userData(add);
        console.log("From Redux : ", this.props.user);
    }

    componentDidMount() {
        document.querySelector("nav").style.height = "65px";
    }

    componentWillUnmount() {
        document.querySelector("nav").style.height = "auto";
    }

    render() {
        const { collapsed } = this.state;
        const navStyle = { marginTop: "2rem" };
        const overlay = (
            <div
                id="sidenav-overlay"
                style={{ backgroundColor: "white" }}
                onClick={this.handleTogglerClick}
            />
        );

        return (
            <section id='userDetails'>
                <div className="fadeInDown">
                    <MDBNavbar
                        color="secondary-color"
                        style={navStyle}
                        light
                        expand="md"
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
                                        <MDBNavLink to="/career/">Home</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/career/dev">Developers</MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBContainer>
                    </MDBNavbar>
                    {collapsed && overlay}
                </div>
                <h3 className="header-title fadeInDown" align="center">Send your details to improve our service</h3>
                <Row xs={12} md={3} className="justify-content-center align-items-center">
                    <Col>
                        <Form.Group controlId="formBasicName">
                            <Form.Label className="fadeInDown" style={{ animationDelay: "0.2s" }}>Full Name</Form.Label>
                            <Form.Control className="fadeInDown" style={{ animationDelay: "0.4s" }} type="text" placeholder="Full Name" onChange={this.changeHandler} name="name" />
                        </Form.Group>
                        <Form className="login-form">
                            <Form.Group controlId="formBasicEmail" style={{ animationDelay: "0.6s" }}>
                                <Form.Label className="fadeInDown" style={{ animationDelay: "0.6s" }}>Email address</Form.Label>
                                <Form.Control className="fadeInDown" style={{ animationDelay: "0.6s" }} type="email" placeholder="Enter Email" onChange={this.changeHandler} name="email" />
                                <Form.Text className="text-muted fadeInDown" style={{ animationDelay: "0.8s" }}>
                                    We'll never share your email with anyone else.
                        </Form.Text>
                            </Form.Group>
                            <p align="center" className="fadeInDown" style={{ animationDelay: "1.2s" }}>
                                <MDBBtn color="success" onClick={this.send}>
                                    Submit
                                </MDBBtn>
                            </p>
                        </Form>
                    </Col>
                </Row>
                <p align="center" className="fadeInDown" style={{ animationDelay: "1.4s" }}>This is an OpenSource project made to help students find their perfect Engg branch and we need your help to improve our model.</p >
            </section>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userData: (user) => { dispatch({ type: 'USER_DATA', user: user }) },
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});



export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);