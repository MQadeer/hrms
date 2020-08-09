import React, { Component } from 'react'
import { Container, Button, Modal, Table, Spinner } from "react-bootstrap"
import store from "../../redux/store"
import { connect } from "react-redux";
import history from "../../history";

class NEmployees extends Component {
  state = {
    loading: false,
    showDescription: false,
    loans: [],
    leaves: []
  }

  componentWillMount() {
    store.dispatch({
      type: "getEmployees"
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
    const employees = this.props.emplolyeesList;
    const employee = employees.find(i => i._id === e.target.value)
    this.setState({
      info: employee.description,
      name: employee.name,
      number: employee.number,
      email: employee.email,
      martialStatus: employee.martialStatus,
      leaves: employee.leaves,
      loans: employee.loans,
      showDescription: true
    })
  }

  closeDescription = () => {
    this.setState({ showDescription: false })
  }

  render() {
    return (
      <div style={{ marginBottom: "5%" }}>
        <h1 style={{ textAlign: "center", marginTop: "2%", paddingBottom: "2%" }}>Employees</h1>
        <Container style={{ marginTop: "1%", paddingBottom: "2%" }}>
          <Table responsive style={{ marginTop: "2%" }}>
            <tbody>
              <tr>
                <th>Name </th>
                <th>email </th>
                <th>Cell no </th>
                <th>Operations </th>
              </tr>
              {this.props.emplolyeesList != undefined ? this.props.emplolyeesList.map((item, index) => {
                return <tr id={item._id} key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.number}</td>
                  <td colspan="2">
                    <Button variant="primary" value={item._id} onClick={this.showDescription.bind(this)} style={{ marginRight: "2%" }}>View more</Button>
                    <Button variant="danger" value={item._id} onClick={this.onDelete.bind(this)} style={{ marginRight: "2%" }}>Remove</Button>
                  </td>
                </tr>
              }) : null}

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
                  <td>Marriage Status</td>
                  <td>{this.state.martialStatus}</td>
                </tr>
                <tr style={{ height: 30, overflowY: "auto" }}>
                  <td>Loans</td>
                  <td style={{ overflowY: "auto" }}>
                    <div style={{ height: 100, overflowY: "auto" }}>

                      {this.state.loans.map((item, index) => {
                        return <div>
                          <p style={{ display: "inline" }}>Amount:  </p>
                          <p style={{ display: "inline" }}>{item.amount}</p><br />
                          <p style={{ display: "inline" }}>Date: </p>
                          <p style={{ display: "inline" }}>{item.date}</p>
                          <hr />
                        </div>
                      })}
                    </div>
                  </td>

                </tr>
                <tr>
                  <td>Leaves</td>
                  <td style={{ overflowY: "auto" }}>
                    <div style={{ height: 100, overflowY: "auto" }}>

                      {this.state.leaves.map((item, index) => {
                        return <div>
                          <p style={{ display: "inline" }}>Days:  </p>
                          <p style={{ display: "inline" }}>{item.days}</p><br />
                          <p style={{ display: "inline" }}>Date: </p>
                          <p style={{ display: "inline" }}>{item.from} ----{item.to}</p><br />
                          <p style={{ display: "inline" }}>Type:  </p>
                          <p style={{ display: "inline" }}>{item.type}</p>
                          <hr />

                        </div>
                      })}
                    </div>
                  </td>
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
  console.log("architectsList ", store.employeesReducer.employees)

  return {
    emplolyeesList: store.employeesReducer.employees, logedIn: store.loginReducer.logedIn,
    user: store.loginReducer.user
  }
}

let Employees = connect(getemployees)(NEmployees);
export default Employees;