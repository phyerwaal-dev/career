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
import axios from 'axios';
import "../question.css";
import questions from "../data/questions.json";
import options from "../data/options.json";
import logo from "../Web_bg.png";
import { connect } from 'react-redux';

// function shuffleArray(array) {
//     let i = array.length - 1;
//     for (; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         const temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array;
// }

class Questions extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            collapsed: false,
            msg: "",
            error: 0,
            selection: questions.map((i, key) => {
                let data = { id: i.id, question: i.question, val: null, select: null };
                return data;
            }),
        };
    }




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
        document.querySelector("nav").style.height = "65px";
    }

    // componentWillMount() {
    //     let shufleQuest = shuffleArray(this.state.selection);
    //     this.setState({
    //         selection: shufleQuest
    //     })
    //     console.log(shufleQuest);
    // }

    componentWillUnmount() {
        document.querySelector("nav").style.height = "auto";
    }

    //Set Answers
    onChoose = async (val, e) => {
        let data = { id: parseInt(e.target.id), val: val, question: this.state.selection[parseInt(e.target.id) - 1].question, select: options[val].opt };
        var new_selection = [];

        await this.state.selection.map((i, key) => {
            console.log("i:", i.id + "data:", data.id);
            i.id == data.id
                ? new_selection.push(data)
                : new_selection.push({ id: i.id, val: i.val, question: i.question, select: i.select });
        });
        await this.setState({ selection: new_selection });
    };

    //Validate questions
    validate = async () => {
        await this.setState({
            error: 0,
            msg: ""
        })
        this.setState(prevState => {
            this.state.selection.sort((a, b) => (a.id - b.id))
        });
        for (var i = 0; i <= this.state.selection.length - 1; i++) {
            if (this.state.selection[i].val == null) {
                // console.log(this.state.selection[i].id + " : " + this.state.selection[i].val);
                // await this.setState({ msg: "" });
                this.setState({ msg: "Please fill all the questions." });
                this.setState({ error: this.state.error + 1 });
            }
        }
        // console.log(this.state.selection);
        // console.log("Error: " + this.state.error);
        if (this.state.error == 0) {
            axios.post('https://phyerwaal-dev-career.herokuapp.com/submit-data', {
                data: this.state.selection,
                user: this.props.user
            }).then((response) => {
                // console.log(response.data);
                // console.log("This :" + this);
                this.props.storeResponse(response.data);
                this.props.history.push('/career/results');
            }).catch(function (error) {
                //console.log(error);

            });
        }
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
                                className="display-10 font-weight-bold question-header fadeInDown" style={{ animationDelay: ".2s" }}
                            >
                                QUESTIONS
              </h1>
                            <MDBCard style={{ width: "100%" }}>
                                {this.state.selection.map((question, index) => {
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
                                                            <MDBInput key={oindex}
                                                                required
                                                                type="radio"
                                                                label={opt.opt}
                                                                id={question.id}
                                                                onClick={this.onChoose.bind(
                                                                    question.id,
                                                                    opt.val,
                                                                )}
                                                                checked={
                                                                    this.state.selection[index].val == opt.val
                                                                        ? true
                                                                        : false
                                                                }
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
                                <h5 className="error-msg justify-content-center align-items-center">{this.state.msg}</h5>
                                <MDBBtn color="success" onClick={this.validate}>SEND ANSWER</MDBBtn>


                            </div>
                        </MDBRow>
                    </MDBContainer>
                </MDBView>
            </div>
        );
    }
}

//Dispatch Data to store state
const mapDispatchToProps = (dispatch) => {
    return {
        storeResponse: (response) => { dispatch({ type: 'RES_SUCCESS', response: response }) },
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});


export default connect(mapStateToProps, mapDispatchToProps)(Questions);