import React from 'react';
import { Button } from 'reactstrap';
import Typical from 'react-typical';
import '../CSS/Main.css';


function Main() {
    return (
        <section id="main">
            <div className="header-div">
                <h3 className="header-text">Does {''}
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={
                            [
                                'Computer Science',
                                1000,
                                'Information Technology',
                                1000,
                                'EXTC',
                                1000,
                                'Mechanical',
                                1000,
                                'Civil',
                                1000
                            ]
                        }
                    />
                    {''}branch suit you?
                </h3>
                <p align="center">
                    <Button className = "sweep-right">LET US HELP</Button>
                </p>
            </div>
        </section>
    );
}

export default Main;