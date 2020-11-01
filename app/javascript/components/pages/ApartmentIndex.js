import React, { Component } from 'react'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class ApartmentIndex extends Component {
    render() {
        return (
            <>
                <div id="index-body">
                    {this.props.apartments.map((apartment, index) => {
                        return (
                            <div key={index} className="index-card">
                                <h3>{apartment.street}</h3>
                                <h3>{apartment.city}, {apartment.state}</h3>
                                <div id="my-buttons">
                                    <Link to={`/apartmentshow/${apartment.id}`} className="button">
                                        More Info
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}