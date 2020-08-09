import React, { Component } from 'react'
import { Container, Button, Modal, Table, Form, Spinner } from "react-bootstrap"
import { connect } from "react-redux";
import op from "./operations";

class NEmployeesManagement extends Component {
  state = {
    loading: false,
    showLoan: false,
    showLeave: false,
    showUpdate: false,
    employeelist: this.props.emplolyeesList,
    name: "",
    number: 0,
    email: "",
    martialStatus: "",

  }


  onchange = (prop, e) => {
    var obj = {};
    obj[prop] = e.target.value;
    this.setState(obj);
    console.log(this.state);
  }

  showHandler = (type, e) => {
    const employees = this.props.emplolyeesList;
    const employee = employees.find(i => i._id === e.target.value)
    switch (type) {
      case "loan":
        this.setState({
          showLoan: true
        })
        break
      case "leave":
        this.setState({
          showLeave: true
        })
        break
      case "update":
        this.setState({
          showUpdate: true,
          name: employee.name,
          number: employee.number,
          email: employee.email,
          martialStatus: employee.martialStatus
        })
        break
    }

    this.setState({
      employeeId: e.target.value,
      employeeName: employee.name,
    })
  }

  closeHandler = (type) => {
    switch (type) {
      case "loan":
        this.setState({
          showLoan: false
        })
      case "leave":
        this.setState({
          showLeave: false
        })
      case "update":
        this.setState({
          showUpdate: false
        })
    }
    // this.setState({
    //   showHandler: () => { return type === "loan" ? true : false },
    //   showLeave: () => { return type === "leave" ? true : false },
    //   showUpdate: () => { return type === "update" ? true : false },
    // })
  }


  handleSubmit =async (type) => {
    if (type === "loan") {
      this.setState({
        loading: true,
        showLoan: false
      })
      const response = await op.addLoan({
        employeeId: this.state.employeeId,
        name: this.state.employeeName,
        amount: this.state.amount,
        date: this.state.date
      })
      this.setState({
        loading: false
      })

    }
    else if (type === "leave") {
      this.setState({
        loading: true,
        showLeave: false
      })
      const response =await op.addLeave({
        employeeId: this.state.employeeId,
        name: this.state.employeeName,
        days: this.state.days,
        from: this.state.from,
        to: this.state.to,
        type:this.state.type
      })
      // this.setState({
      //   loading: false
      // })
    }
    else if (type === "update") {
      this.setState({
        loading: true,
        showUpdate: false
      })
      const response = op.updateEmployee({
        employeeId: this.state.employeeId,
        name: this.state.name,
        email: this.state.email,
        number: this.state.number,
        martialStatus: this.state.martialStatus
      })
      this.setState({
        loading: false
      })
    }
    this.setState({
      showLoan: false
    })
  }

  render() {
    return (
      <div style={{ marginBottom: "5%" }} >
        <h1 style={{ textAlign: "center", marginTop: "2%", paddingBottom: "2%" }}>Epmloyees</h1>
        <Container style={{ marginTop: "1%", paddingBottom: "2%" }}>
          <Table responsive style={{ marginTop: "2%" }}>
            <tbody>
              <tr>
                <th>Name </th>
                <th>email </th>
                <th>Cell no </th>
                <th>Operations </th>
              </tr>
              {this.props.emplolyeesList !== undefined ? this.props.emplolyeesList.map((item, index) => {
                return <tr id={item._id} key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.number}</td>
                  <td>
                    <Button variant="primary" value={item._id} onClick={this.showHandler.bind(this, "loan")} style={{ marginRight: "2%" }}>Add loan</Button>
                    <Button variant="info" value={item._id} onClick={this.showHandler.bind(this, "leave")} style={{ marginRight: "2%" }}>Add leave</Button>
                    <Button variant="success" value={item._id} onClick={this.showHandler.bind(this, "update")} style={{ marginRight: "2%" }}>Update</Button>
                  </td>
                </tr>
              }) : null}

            </tbody>
          </Table>
        </Container>
        <Modal show={this.state.showLoan} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header >
            <Modal.Title id="contained-modal-title-vcenter">
              Loan Handler
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control disabled type="email" value={this.state.employeeName} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>amount</Form.Label>
                <Form.Control type="number" onChange={this.onchange.bind(this, "amount")} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Date</Form.Label>
                <Form.Control type="text" placeholder="dd/mm/yyyy" onChange={this.onchange.bind(this, "date")} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.closeHandler.bind(this, "loan")}>Cancel</Button>
            <Button variant="success" onClick={this.handleSubmit.bind(this, "loan")} >Submit</Button>
          </Modal.Footer>
        </Modal>


        <Modal show={this.state.showLeave} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header >
            <Modal.Title id="contained-modal-title-vcenter">
              Leave Handler
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control disabled type="email" value={this.state.employeeName} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Days</Form.Label>
                <Form.Control type="number" onChange={this.onchange.bind(this, "days")} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>From</Form.Label>
                <Form.Control type="text" placeholder="dd/mm/yyyy" onChange={this.onchange.bind(this, "from")} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>To</Form.Label>
                <Form.Control type="text" placeholder="dd/mm/yyyy" onChange={this.onchange.bind(this, "to")} />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Type</Form.Label>
                <select style={{marginLeft:"2%"}} onChange={this.onchange.bind(this, "type")}>
                  <option>{this.state.martialStatus}</option>
                  <option>Annual leave</option>
                  <option>Sick leave</option>
                  <option>casual leave</option>
                </select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.closeHandler.bind(this, "leave")}>Cancel</Button>
            <Button variant="success" onClick={this.handleSubmit.bind(this, "leave")} >Submit</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showUpdate} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header >
            <Modal.Title id="contained-modal-title-vcenter">Update Handler</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={this.state.name} onChange={this.onchange.bind(this, "name")} />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={this.state.email} onChange={this.onchange.bind(this, "email")} />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Contact No</Form.Label>
                <Form.Control type="number" value={this.state.number} onChange={this.onchange.bind(this, "number")} />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Marriage Status</Form.Label>
                <select style={{marginLeft:"2%"}} onChange={this.onchange.bind(this, "martialStatus")}>
                  <option>{this.state.martialStatus}</option>
                  <option>Single</option>
                  <option>Married</option>
                </select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.closeHandler.bind(this, "update")}>Cancel</Button>
            <Button variant="success" onClick={this.handleSubmit.bind(this, "update")} >Update</Button>
          </Modal.Footer>
        </Modal>


        <Modal show={this.state.loading} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Body>
            <Spinner animation="grow" variant="dark" />
          </Modal.Body>

        </Modal>
      </div >

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

let Emanagement = connect(getemployees)(NEmployeesManagement);
export default Emanagement;