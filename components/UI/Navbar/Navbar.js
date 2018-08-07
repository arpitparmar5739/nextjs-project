import React from 'react';
import Link from 'next/link';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler } from 'reactstrap';

class MyNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar color="dark" dark expand="md" fixed="top">
                <Link href="/" passHref>
                    <NavbarBrand>Learning Nextjs</NavbarBrand>
                </Link>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link href="/about" passHref>
                                <NavLink>About Me</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/signup" passHref>
                                <NavLink>Signup</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/login" passHref>
                                <NavLink>Login</NavLink>
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default MyNavbar;