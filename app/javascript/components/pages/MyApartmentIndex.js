import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MyApartmentIndex extends Component {
    render() {
        return (
            <>
                <div id="index-body">
                    {this.props.apartments.map((apartment, index) => {
                        return (
                            <div key={index} className="index-card">
                                <h3>{apartment.street}</h3>
                                <h3>{apartment.city}</h3>
                                <h3>{apartment.state}</h3>
                                <br />
                                <Link to={`/apartmentshow/${apartment.id}`} className="button">
                                    More Info
                                </Link>
                                <br />
                                <Link to={`/apartmentedit/${apartment.id}`} className="button">
                                    Edit Listing
                                </Link>
                            </div>
                        )
                    })
                    }
                </div>
            </>
        )
    }
}