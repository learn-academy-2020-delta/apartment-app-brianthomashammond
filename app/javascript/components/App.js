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
import MyApartmentIndex from "./pages/MyApartmentIndex"

// import mockApartments from './mockApartments.js'

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
      apartments: []
    }
  }

  componentDidMount() {
    this.apartmentIndex()
  }

  apartmentIndex = () => {
    fetch("/apartments")
      .then(response => {
        return response.json()
      })
      .then(payload => {
        this.setState({ apartments: payload })
      })
      .catch(errors => {
        console.log("index errors:", errors);
      })
  }

  createNewApartment = (apartment) => {
    console.log(apartment);
    return fetch("/apartments", {
      body: JSON.stringify(apartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => {
        if (response.status === 200) {
          this.apartmentIndex()
        }
        return response
      })
      .catch(errors => {
        console.log("create errors:", errors)
      })
  }

  updateApartment = (apartment, id) => {
    console.log('apartment', apartment, 'id', id);
  }

  render() {
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      sign_up_route,
      current_user
    } = this.props
    return (
      <Router>
        <Header />

        <Switch>

          {/* HOME */}
          <Route exact path="/" component={Home} />

          {/* APARTMENT INDEX */}
          <Route path="/apartmentindex" render={(props) => <ApartmentIndex apartments={this.state.apartments} />} />


          <Route path="/apartmentshow/:id"
            render={(props) => {
              let localid = props.match.params.id
              let apartment = this.state.apartments.find(apartment =>
                apartment.id === parseInt(localid))
              return (
                <ApartmentShow apartment={apartment} />
              )
            }}
          />

          {logged_in &&
            <Route
              path="/apartmentnew"
              render={(props) =>
                <ApartmentNew
                  createNewApartment={this.createNewApartment}
                  current_user={current_user}
                />
              }
            />
          }

          {logged_in &&
            <Route
              path="/myapartmentindex"
              render={(props) => {
                let user = current_user.id
                let apartments =
                  this.state.apartments.filter(apartment => apartment.user_id === user)
                return (
                  <MyApartmentIndex apartments={apartments} />
                )
              }}
            />
          }

          {logged_in &&
            <Route
              path="/apartmentedit/:id"
              render={(props) => {
                let id = props.match.params.id
                let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
                return (
                  <ApartmentEdit
                    updateApartment={this.updateApartment}
                    current_user={current_user}
                    apartment={apartment}
                  />
                )
              }}
            />
          }

          <Route component={NotFound} />

        </Switch>

        <Footer
          logged_in={logged_in}
          sign_in_route={sign_in_route}
          sign_out_route={sign_out_route}
          sign_up_route={sign_up_route}
          current_user={current_user}
        />
      </Router>
    );
  }
}
