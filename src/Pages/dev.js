import React from 'react';
import { Row, Col } from 'reactstrap';
import '../CSS/dev.css';
import logo from '../phyerwaal_dev_logo_final.png';

export default function Developers() {
    return (
        <section id="dev-section">
            <div className="header" align="center">
                <p align="center" className="dev">
                    Developed By
                </p>
                <img src={logo} alt="Phyerwaal_Dev" />
                <Row className="dev-details">
                    <Col sm={12} md={3}>
                        <h1 className="name">Tejas Raibagi</h1>
                    </Col>
                    <Col sm={12} md={3}>
                        <h1 className="name">Prasad Jadhav</h1>
                    </Col>
                    <Col sm={12} md={3}>
                        <h1 className="name">Sujoy Dev</h1>
                    </Col>
                    <Col sm={12} md={3}>
                        <h1 className="name">Aseem Godambe</h1>
                    </Col>
                </Row>
            </div>
        </section>
    );
}