import React, { Component } from 'react'
import image from '../assets/luke-van-zyl-koH7IVuwRLw-unsplash.jpg'

export default class Home extends Component {
    render() {
        return (
            <>
                <div id="home" style={{ backgroundImage: `url(${image})` }}>
                </div>
            </>
        )
    }
}