import React, { Component } from "react"
import PropTypes from "prop-types"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentShow from "./pages/ApartmentShow"

import mockApartments from './mockApartments.js'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: mockApartments
    }
  }
  render() {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <Router>
        <Header />
        <h1>hello world</h1>
        { logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        { !logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/apartmentedit/:id" component={ApartmentEdit} />
          <Route path="/apartmentindex" component={ApartmentIndex} />
          <Route path="/apartmentnew" component={ApartmentNew} />
          <Route path="/apartmentshow/:id" component={ApartmentShow} />
          <Route component={NotFound} />
        </Switch>

        <Footer />
      </Router>
    );
  }
}
