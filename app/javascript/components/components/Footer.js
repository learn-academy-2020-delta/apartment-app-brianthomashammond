import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'

export default class Footer extends Component {
    render() {
        const {
            logged_in,
            sign_in_route,
            sign_out_route,
            sign_up_route,
            current_user
        } = this.props
        return (
            <>
                <div id="footer">
                    <Nav>
                        <NavItem>
                            <a href="/">Home</a>
                        </NavItem>
                        <NavItem>
                            <a href="/apartmentindex">Apartment List</a>
                        </NavItem>
                        {logged_in &&
                            <>
                                <NavItem>
                                    <a href={sign_out_route}>Sign Out</a>
                                </NavItem>
                                <NavItem>
                                    <a href="/apartmentnew">Create a New Apartment</a>
                                </NavItem>
                                <NavItem>
                                    <a href="/myapartmentindex">See My Apartments</a>
                                </NavItem>
                            </>
                        }
                        {!logged_in &&
                            <>
                                <NavItem>
                                    <a href={sign_in_route}>Sign In</a>
                                </NavItem>
                                <NavItem>
                                    <a href={sign_up_route}>Sign Up</a>
                                </NavItem>
                            </>
                        }
                    </Nav>
                </div>
            </>
        )
    }
}