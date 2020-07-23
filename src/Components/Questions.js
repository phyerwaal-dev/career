import React from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBRow,
    MDBView,
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBInput,
} from "mdbreact";
import "../question.css";
import questions from "../data/questions.json";
import options from "../data/options.json";
import logo from "../Web_bg.png";

class Questions extends React.Component {
    state = {
        collapsed: false,
        selection: questions.map((i, key) => {
            let data = { id: i.id, val: null };
            return data;
        }),
    };

    handleTogglerClick = () => {
        const { collapsed } = this.state;
        this.setState({
            collapsed: !collapsed,
        });
    };

    onClick = (nr) => () => {
        this.setState({
            radio: nr,
        });
    };

    componentDidMount() {
        // questions.map((i, key) => {
        //   let data = { id: i.id, val: null };
        //   this.setState((prevState) => ({
        //     selection: [...prevState.selection, data],
        //   }));
        // });
        document.querySelector("nav").style.height = "65px";
    }

    componentWillUnmount() {
        document.querySelector("nav").style.height = "auto";
    }

    onChoose = async (val, e) => {
        let data = { id: parseInt(e.target.id), val: val };
        var new_selection = [];

        await this.state.selection.map((i, key) => {
            i.id == data.id
                ? new_selection.push(data)
                : new_selection.push({ id: i.id, val: i.val });
        });
        await this.setState({ selection: new_selection });
    };

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
            <div id="questions">
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
                <MDBView src={logo}>
                    <MDBContainer
                        style={{ height: "100%", width: "100%", paddingTop: "5rem" }}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <MDBRow>
                            <h1
                                className="display-10 font-weight-bold question-header"
                            >
                                QUESTIONS
              </h1>
                            <MDBCard style={{ width: "100%" }}>
                                {questions.map((question, index) => {
                                    return (
                                        <div
                                            className="card fadeInDown"
                                            style={{ animationDelay: ".4s" }}
                                        >
                                            <MDBCardBody>
                                                <MDBCardTitle>
                                                    Q{index + 1}. {question.question}
                                                </MDBCardTitle>
                                                {options.map((opt, oindex) => {
                                                    return (
                                                        <MDBContainer className="mt-3">
                                                            <MDBInput
                                                                id={question.id}
                                                                onClick={this.onChoose.bind(
                                                                    question.id,
                                                                    opt.val
                                                                )}
                                                                checked={
                                                                    this.state.selection[index].val === opt.val
                                                                        ? true
                                                                        : false
                                                                }
                                                                label={opt.opt}
                                                                type="radio"
                                                            />
                                                        </MDBContainer>
                                                    );
                                                })}
                                            </MDBCardBody>
                                            <hr></hr>
                                        </div>
                                    );
                                })}
                            </MDBCard>
                            <div
                                className="send-btn fadeInDown"
                                style={{ animationDelay: "1s" }}
                            >
                                <MDBBtn color="success">SEND ANSWER</MDBBtn>
                            </div>
                        </MDBRow>
                    </MDBContainer>
                </MDBView>
            </div>
        );
    }
}

export default Questions;