import React, { Component } from 'react'

export default class ApartmentShow extends Component {

    render() {
        const { apartment } = this.props
        return (
            <>
                <h3>ApartmentShow</h3>
                <h3>{apartment.street}</h3>
                <h3>{apartment.city}</h3>
                <h3>{apartment.state}</h3>
                <h3>{apartment.manager}</h3>
                <h3>{apartment.email}</h3>
                <h3>{apartment.price}</h3>
                <h3>{apartment.bedrooms}</h3>
                <h3>{apartment.bathrooms}</h3>
                <h3>{apartment.pets}</h3>
            </>
        )
    }
}