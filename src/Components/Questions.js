import React from "react";
import { Form } from "react-bootstrap";
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
    MDBLink,
} from "mdbreact";
import axios from "axios";
import "../question.css";
import questions from "../data/questions.json";
import options from "../data/options.json";
import logo from "../Web_bg.png";
import { connect } from "react-redux";

class Questions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: [0, 1, 2, 3, 4],
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
    componentWillMount() {
        var xxx = this.shuffle(this.state.selection);
        console.log(xxx);
        this.setState({ selection: xxx });
    }

    componentDidMount() {
        document.querySelector("nav").style.height = "65px";
    }

    componentWillUnmount() {
        document.querySelector("nav").style.height = "auto";
    }

    shuffle(arra1) {
        var ctr = arra1.length,
            temp,
            index;

        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
        return arra1;
    }

    onChoose = async (id, x, val) => {
        console.log(id, x, val);
        let data = {
            id: parseInt(id),
            val: val,
            question: this.state.selection[x].question,
            select: options[val].opt,
        };
        console.log(data);
        var new_selection = [];

        await this.state.selection.map((i, key) => {
            if (i.id === data.id) console.log(i);
            i.id == data.id
                ? new_selection.push(data)
                : new_selection.push({
                    id: i.id,
                    val: i.val,
                    question: i.question,
                    select: i.select,
                });
        });
        await this.setState({ selection: new_selection });
        console.log(this.state.selection);
    };

    nextValidate = async () => {
        await this.setState({
            error: 0,
            msg: "",
        });
        var err = 0;
        for (var i = 0; i <= this.state.current.length - 1; i++) {
            if (this.state.selection[this.state.current[i]].val == null) {
                err = err + 1;
            }
        }

        if (err > 0)
            this.setState({
                error: err,
                msg: "Please fill all the questions.",
            });
        else
            this.setState({
                error: 0,
                msg: "",
            });
    };

    //Validate questions
    validate = async () => {
        // await this.setState({
        //   error: 0,
        //   msg: "",
        // });
        // var err = 0;
        // for (var i = 0; i <= this.state.selection.length - 1; i++) {
        //   if (this.state.selection[i].val == null) {
        //     err = err + 1;
        //   }
        // }

        // if (err > 0)
        //   this.setState({
        //     error: err,
        //     msg: "Please fill all the questions.",
        //   });
        await this.nextValidate();
        console.log("Error: " + this.state.error);
        if (this.state.error == 0) {
            axios
                .post("https://phyerwaal-dev-career.herokuapp.com/submit-data", {
                    data: this.state.selection.sort(function (a, b) {
                        return a.id - b.id;
                    }),
                })
                .then((response) => {
                    this.props.storeResponse(response.data);
                    this.props.history.push("/career/results");
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };

    render() {
        const { collapsed } = this.state;
        const navStyle = { marginTop: "2rem" };
        const overlay = (
            <div
                id='sidenav-overlay'
                style={{ backgroundColor: "white" }}
                onClick={this.handleTogglerClick}
            />
        );
        return (
            <div id='questions'>
                <div className='fadeInDown'>
                    <MDBNavbar
                        color='secondary-color'
                        style={navStyle}
                        light
                        expand='md'
                        scrolling
                        transparent
                    >
                        <MDBContainer>
                            <MDBNavbarBrand href='/career/'>
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
                        style={{ height: "100%", width: "100%", paddingTop: "5rem" }}
                        className='d-flex justify-content-center align-items-center'
                    >
                        <MDBRow>
                            <h1
                                className='display-10 font-weight-bold question-header fadeInDown'
                                style={{ animationDelay: ".2s" }}
                            >
                                QUESTIONS
              </h1>
                            <MDBCard style={{ width: "100%" }}>
                                {this.state.selection.map((question, index) => {
                                    return (
                                        <div
                                            className='card fadeInDown'
                                            style={
                                                this.state.current.includes(index)
                                                    ? { display: "block", animationDelay: ".0s" }
                                                    : { display: "none", animationDelay: ".0s" }
                                            }
                                        >
                                            <MDBCardBody>
                                                <MDBCardTitle>
                                                    Q{index + 1}. {question.question}
                                                </MDBCardTitle>
                                                {options.map((opt, oindex) => {
                                                    return (
                                                        <MDBContainer className='mt-3'>
                                                            <MDBInput
                                                                key={oindex}
                                                                required
                                                                type='radio'
                                                                label={opt.opt}
                                                                id={question.id}
                                                                onClick={(e) => {
                                                                    this.onChoose(e.target.id, index, opt.val);
                                                                }}
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
                                className='send-btn fadeInDown'
                                style={{ animationDelay: "1s" }}
                            >
                                <h5 className='error-msg justify-content-center align-items-center'>
                                    {this.state.msg}
                                </h5>
                                {this.state.current[4] <= 4 ? null : (
                                    <MDBBtn
                                        color='success'
                                        onClick={() => {
                                            this.setState({
                                                msg: "",
                                                current: Array.from(this.state.current, (x) => x - 5),
                                            });
                                        }}
                                    >
                                        prev
                                    </MDBBtn>
                                )}

                                {this.state.current[4] >= this.state.selection.length - 1 ? (
                                    <MDBBtn color='success' onClick={this.validate}>
                                        SEND ANSWER
                                    </MDBBtn>
                                ) : (
                                        <MDBBtn
                                            color='success'
                                            onClick={async () => {
                                                await this.nextValidate();
                                                if (this.state.error == 0)
                                                    await this.setState({
                                                        current: Array.from(this.state.current, (x) => x + 5),
                                                    });
                                                console.log(this.state.current);
                                            }}
                                        >
                                            next
                                        </MDBBtn>
                                    )}
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
        storeResponse: (response) => {
            dispatch({ type: "RES_SUCCESS", response: response });
        },
    };
};

const mapStateToProps = (state) => ({
    user: state.user
});



export default connect(mapStateToProps, mapDispatchToProps)(Questions);
