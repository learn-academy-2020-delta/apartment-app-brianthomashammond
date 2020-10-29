import React, { Component } from 'react'
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap'
import { Redirect } from "react-router-dom";

export default class ApartmentEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                street: this.props.apartment.street,
                city: this.props.apartment.city,
                state: this.props.apartment.state,
                manager: this.props.apartment.manager,
                email: this.props.apartment.email,
                price: this.props.apartment.price,
                bedrooms: this.props.apartment.bedrooms,
                bathrooms: this.props.apartment.bathrooms,
                pets: this.props.apartment.pets,
                user_id: this.props.current_user.id,
            },
            success: false
        }
    }

    handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({ form: form })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateApartment(this.state.form, this.props.apartment.id)
        this.setState({ success: true })
    }

    render() {
        return (
            <>
                <h3>Edit Apartment</h3>
                <div className="body-container">
                    <div className="form">
                        <Form>
                            <FormGroup>
                                <Label>Street</Label>
                                <Input
                                    type="text"
                                    name="street"
                                    onChange={this.handleChange}
                                    value={this.state.form.street}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>City</Label>
                                <Input
                                    type="text"
                                    name="city"
                                    onChange={this.handleChange}
                                    value={this.state.form.city}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>State</Label>
                                <Input
                                    type="text"
                                    name="state"
                                    onChange={this.handleChange}
                                    value={this.state.form.state}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Manager's Name</Label>
                                <Input
                                    type="text"
                                    name="manager"
                                    onChange={this.handleChange}
                                    value={this.state.form.manager}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Manager's Email</Label>
                                <Input
                                    type="text"
                                    name="email"
                                    onChange={this.handleChange}
                                    value={this.state.form.email}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Price</Label>
                                <Input
                                    type="text"
                                    name="price"
                                    onChange={this.handleChange}
                                    value={this.state.form.price}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Bedrooms</Label>
                                <Input
                                    type="text"
                                    name="bedrooms"
                                    onChange={this.handleChange}
                                    value={this.state.form.bedrooms}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Bathrooms</Label>
                                <Input
                                    type="text"
                                    name="bathrooms"
                                    onChange={this.handleChange}
                                    value={this.state.form.bathrooms}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Pets</Label>
                                <FormGroup check>
                                    <Label check>
                                        <Input
                                            type="radio"
                                            name="pets"
                                            value="yes"
                                            checked={this.state.form.pets === "yes"}
                                            onChange={this.handleChange}
                                        />
                                Yes
                                </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        name="pets"
                                        value="no"
                                        checked={this.state.form.pets === "no"}
                                        onChange={this.handleChange}
                                    />
                                No
                                </Label>
                            </FormGroup>

                            <Button
                                name="submit"
                                color="secondary"
                                onClick={this.handleSubmit}
                            >
                                Edit Apartment
                            </Button>
                        </Form>
                    </div>
                </div>
                { this.state.success && <Redirect to="/apartmentindex" />}
            </>
        )
    }
}