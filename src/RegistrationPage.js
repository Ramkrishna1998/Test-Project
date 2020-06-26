import React, { Component } from 'react';
import { Button, Container, TextField, MenuItem, InputLabel, Select, FormControl } from '@material-ui/core';

class RegistrationPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            email: '',
            password: '',
            phone: '',
            Zipcode: '',
            city: '',

        }
    }

    handleOnChangeEventOfUserName = (e) => {
        this.setState({ userName: e.target.value });
    }
    handleOnChangeEventOfEmail = (e, props) => {
        this.setState({ email: e.target.value });

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
            return (true)
        }
        else {
            console.log("Enter Valid Email");
            return (false)
        }

    }
    handleOnChangeEventOfPassword = (e) => {
        this.setState({ password: e.target.value });
    }
    handleOnChangeEventOfPhoneNumber = (e) => {
        this.setState({ phone: e.target.value });
        if (/^\d{10}$/.test(e.event.target.value)) {
            return true;
        }
        else {
            console.log("Enter Valid Phone number");
            return (false);
        }
    }

    handleDropDownOfCity = (event) => {
        this.setState({ city: event.target.value })
    }
    hnadleSubmitEvent = () => {

        console.log(this.state.userName);
        alert("Welcome " + this.state.userName);
    }

    render() {
     let {city} = this.state

        return (
            <div class="main-outline">
               <Container maxWidth="sm">
                    <form onSubmit={this.hnadleSubmitEvent}>

                        <div class="form-div">

                            <TextField
                                required
                                id="filled-required"
                                label="Name"
                                defaultValue="Hello World"
                                variant="filled"
                                value={this.state.userName} onChange={(e) => this.handleOnChangeEventOfUserName(e)}
                            />
                        </div>
                        <div class="form-div">
                            <TextField
                                required
                                id="filled-required"
                                label="Email"
                                variant="filled"
                                pattern ="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2, 3})+$/"
                                value={this.state.email} onChange={(e) => this.handleOnChangeEventOfEmail(e)}
                            />

                        </div>
                        <div class="form-div">
                            <TextField
                                required
                                id="filled-required"
                                type="password"
                                label="Password"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                variant="filled"
                                value={this.state.password} onChange={(e) => this.handleOnChangeEventOfPassword(e)}
                            />
                        </div>
                        <div class="form-div">
                            <TextField
                                required
                                id="filled-required"
                                label="Contact Number"
                                variant="filled"
                                value={this.state.phone} onChange={(e) => this.handleOnChangeEventOfPhoneNumber(e)}
                            />
                        </div>

                        <div class="form-div">
                            <FormControl variant="filled" >
                                <InputLabel id="demo-simple-select-filled-label">City</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={city}
                                    onChange={(e) => this.handleDropDownOfCity(e)}
                                >
                                    <MenuItem value={"jamnagar"}>Jamnagar</MenuItem>
                                    <MenuItem value={"rajkot"}>Rajkot</MenuItem>
                                    <MenuItem value={"surat"}>Surat</MenuItem>
                                </Select>

                            </FormControl>
                        </div>
                        <Button variant="contained" color="primary" type="submit">Submit</Button>

                    </form>

                </Container>
            </div>
        )
    }


}
export default RegistrationPage;