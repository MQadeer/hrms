import React, { Component } from 'react'
import { Container, Button, Modal, Table, Spinner } from "react-bootstrap"
import store from "../../redux/store"
import { connect } from "react-redux";
import Axios from "axios";
import swal from "sweetalert";

class NRequests extends Component {
  state = {
    showDescription: false,
    requestsList: [],
  }

  componentWillMount() {
    this.setState({
      loading: true
    })
    Axios.get("/client/getClients")
      .then(resp => {
        this.setState({
          loading: false,
          requestsList: resp.data
        })
          // store.dispatch({
          //   type: "getClients",
          //   payload: resp.data
          // })
      })
  }

  onDelete = (e) => {
    document.getElementById(e.target.value).remove();
    store.dispatch({
      type: "removeEmployee",
      payload: { id: e.target.value }
    })
  }

  showDescription = (e) => {
    const requests = this.state.requestsList;
    const request = requests.find(i => i._id === e.target.value)
    this.setState({
      name: request.name,
      number: request.number,
      email: request.email,
      status: request.status,
      comments: request.comments,
      showDescription: true
    })
  }

  closeDescription = () => {
    this.setState({ showDescription: false })
  }

  render() {
    return (
      <div style={{ marginBottom: "5%" }}>
        <h1 style={{ textAlign: "center", marginTop: "2%", paddingBottom: "2%" }}>New Requests</h1>
        <Container style={{ marginTop: "1%", paddingBottom: "2%" }}>
          <Table responsive style={{ marginTop: "2%" }}>
            <tbody>
              <tr>
                <th>Name </th>
                <th>email </th>
                <th>Cell no </th>
                <th>Operations </th>
              </tr>
              {/* {this.props.emplolyeesList != undefined ? this.props.emplolyeesList.map((item, index) => { */}
              {this.state.requestsList.map((item, index) => {
                return <tr id={item._id} key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.number}</td>
                  <td colspan="2">
                    <Button variant="primary" value={item._id} onClick={this.showDescription.bind(this)} style={{ marginRight: "2%" }}>View more</Button>
                    {/* <Button variant="danger" value={item._id} onClick={this.onDelete.bind(this)} style={{ marginRight: "2%" }}>Remove</Button> */}
                  </td>
                </tr>
              })}

            </tbody>
          </Table>
        </Container>
        <Modal show={this.state.showDescription} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header >
            <Modal.Title id="contained-modal-title-vcenter">
              {this.state.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table responsive style={{ marginTop: "2%" }}>
              <tbody>
                <tr>
                  <td>Email</td>
                  <td>{this.state.email}</td>
                </tr>
                <tr>
                  <td>Contact No</td>
                  <td>{this.state.number}</td>
                </tr>
                <tr>
                  <td> Status</td>
                  <td>{this.state.status}</td>
                </tr>
                <tr>
                  <td> Comment</td>
                  <td>{this.state.comments}</td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.closeDescription}>Close</Button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.loading} size="lg" centered>
          <Spinner style={{ position: "absolute", display: "block", top: "50%", left: "50%", fontSize: 50 }}
            animation="border" variant="light" />
        </Modal>
      </div>

    )
  }
}

const getemployees = (store) => {
  console.log("Requests ", store.employeesReducer.employees)

  return {
    emplolyeesList: store.employeesReducer.requests, logedIn: store.loginReducer.logedIn,
  }
}

let Requests = connect(getemployees)(NRequests);
export default Requests;