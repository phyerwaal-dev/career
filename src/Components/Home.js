import React from 'react';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBFooter,
    MDBLink,
} from 'mdbreact';
import '../home.css';
import logo from '../Web_bg.png';

class CallToActionIntro extends React.Component {
    state = {
        collapsed: false
    };

    handleTogglerClick = () => {
        const { collapsed } = this.state;
        this.setState({
            collapsed: !collapsed
        });
    };

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
                style={{ backgroundColor: 'transparent' }}
                onClick={this.handleTogglerClick}
            />
        );
        return (
            <div id='caltoaction'>
                <div>
                    <MDBNavbar
                        color='secondary-color'
                        style={navStyle}
                        light
                        expand='md'
                        fixed='top'
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
                                    <MDBNavItem active>
                                        <MDBNavLink to='/career/'>Home</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to='/career/questions'>Developers</MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBContainer>
                    </MDBNavbar>
                    {collapsed && overlay}
                </div>
                <MDBView src={logo}>
                    <MDBContainer
                        style={{ height: '100%', width: '100%', paddingTop: '12rem' }}
                        className='d-flex justify-content-center align-items-center'
                    >
                        <MDBRow>
                            <MDBCol sm='4' md='12' className='mb-4 text-center'>
                                <h1 className='display-4 font-weight-bold mb-0 pt-md-5 pt-5'>
                                    Find Your Interested Branch
                                </h1>
                                <h4 className='pt-md-1 pt-sm-2 pt-1 pb-md-3 pb-sm-3 pb-3'>
                                    Confusion is <strong>Temperary</strong>, Interest is <strong>Permanent</strong>
                                </h4>
                                <MDBLink to="/career/questions">
                                    <MDBBtn color="success">Let Us Help</MDBBtn>
                                </MDBLink>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <MDBFooter>
                        <div className="footer-copyright text-center" style={{ paddingTop: '8rem' }}>
                            <MDBContainer fluid>
                                &copy; {new Date().getFullYear()} Phyerwaal Dev
                        </MDBContainer>
                        </div>
                    </MDBFooter>
                </MDBView>
            </div>
        );
    }
}

export default CallToActionIntro;