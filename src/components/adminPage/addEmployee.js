import React, { Component } from 'react';
import { Button, Col, Row, Form, Container, Modal, Spinner } from "react-bootstrap";
import Axios from "axios";
import swal from "sweetalert";

export default class addEmployee extends Component {
    state = {
        loading: false,
        name: "",
        email: "",
        number: 0,
        martialStatus: "",
    }

    onchange = (prop, e) => {
        var obj = {};
        obj[prop] = e.target.value;
        this.setState(obj);
        console.log(this.state);
    }

    handleSubmit = async () => {
        const info = this.state
        this.setState({
            loading: true
        })
        Axios.post("/employee/addEmployee", info)
            .then(resp => {
                this.setState({
                    loading: false
                })
                if (resp.data === "success") {
                    swal({
                        title: "Employee added!",
                        icon: "success",
                    })
                } else {
                    swal({
                        title: "Operation Failed!",
                        icon: "error",
                    })
                }
            })
    }
    render() {
        return (
            <>
                <h1 style={{ textAlign: "center", marginTop: "2%", paddingBottom: "2%" }}>New Employee Form</h1>
                <Container style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", padding: "2%", borderRadius: 5 }}>
                    <Form >
                        <Row>
                            <Col md>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={this.state.name} onChange={this.onchange.bind(this, "name")} />

                            </Col>
                            <Col md>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={this.state.email} onChange={this.onchange.bind(this, "email")} />
                            </Col>
                        </Row>
                        <Row>
                            <Col md>
                                <Form.Label>Contact No</Form.Label>
                                <Form.Control type="number" value={this.state.number} onChange={this.onchange.bind(this, "number")} />
                            </Col>
                            <Col md>
                                <Form.Label>Marriage Status</Form.Label>
                                <select class="form-control" onChange={this.onchange.bind(this, "martialStatus")}>
                                    <option>{this.state.martialStatus}</option>
                                    <option>Single</option>
                                    <option>Married</option>
                                </select>
                            </Col>
                        </Row>
                        <Button variant="primary" style={{marginTop:"2%"}} onClick={this.handleSubmit} >Submit</Button>
                    </Form>
                </Container>

                <Modal  show={this.state.loading} size="lg" centered>
                        <Spinner style={{position: "absolute",display: "block",top: "50%",left: "50%",fontSize:50}} 
                        animation="border" variant="light" />
                </Modal>
            </>
        )
    }
}
