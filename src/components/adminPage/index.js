import React from 'react';
import Navigationbar from "../navbar/index";
import { Tab, Nav, Row, Col, Navbar,Button } from "react-bootstrap";
import useStyles from "./styles.js";
import Footer from '../footer/index.js';
import Employees from "./employees";
import AddEmployee from "./addEmployee";
import Emanagement from "./employeesmanagement";
import Requests from "./requests";
import store from "../../redux/store";
import history from "../../history";

export default function AdminPanel() {
  const classes = useStyles();


  const logOut = () => {
    store.dispatch({
        type: "logout",
    })
    history.replace('', null);
    history.push("/")
    
}
  return (
    <div>
      {/* <Navigationbar /> */}
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Navbar.Brand >
          H.R.M.S
        </Navbar.Brand>
        <Nav className="ml-auto" style={{ backgroundColor: "#0594a9", marginRight: "2%", borderRadius: 5 }} >
          <Button size="lg" variant="dark" className={classes.signinButton} onClick={logOut}>Logout</Button>
        </Nav>
      </Navbar>
      <div style={{ backgroundColor: "#323232", marginTop: "2%", marginBottom: "2%", paddingTop: "2%", paddingBottom: "2%" }}>
        <h1 style={{ color: "white", textAlign: "center" }}>Dashboard</h1>
      </div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
        <Row>
          <Col sm={2} style={{ backgroundColor: "#323232", paddingBottom: "3%" }}>
            <Nav variant="tabs" className="flex-column"
              style={{ marginTop: "2%", marginLeft: "2%", backgroundColor: "#323232", border: "none" }} >
              <Nav.Item className={classes.tab}>
                <Nav.Link className={classes.items} eventKey="first" >Employees</Nav.Link>
              </Nav.Item>
              <Nav.Item className={classes.tab}>
                <Nav.Link className={classes.items} eventKey="second" >Manage Employs</Nav.Link>
              </Nav.Item>
              <Nav.Item className={classes.tab}>
                <Nav.Link className={classes.items} eventKey="third" >Add Employee</Nav.Link>
              </Nav.Item>
              <Nav.Item className={classes.tab}>
                <Nav.Link className={classes.items} eventKey="fourth" >New Request</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Employees />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Emanagement />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <AddEmployee />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <Requests />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <Footer />
    </div>
  )

}
