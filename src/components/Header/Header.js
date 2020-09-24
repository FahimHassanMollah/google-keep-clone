import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                      Google Keep Clone
                 </Navbar.Brand>
            </Navbar>
        </div>
    );
};

export default Header;