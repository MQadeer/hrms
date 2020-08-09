import React, { useState } from 'react';
import { Navbar, Nav, Form, Button, Modal, DropdownButton, Dropdown, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import useStyles from "./styles.js";
import store from "../../redux/store";
import validator from 'validator';
import swal from "sweetalert";


function Navigationbar(props) {
    const [showSignin, setSigninShow] = useState(false);
    const [fullname, setname] = useState("");
    const [mobileno, setmobileno] = useState(0);
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const signinClose = () => setSigninShow(false);
    const signinShow = () => setSigninShow(true);

    const handleSignIn = () => {
        if (!validator.isEmail(email) && email!="admin" ) {
            document.getElementById("email").style.borderColor = "red";
            return swal({
                title: "invalid email",
                icon: "error",
            });
        }
        else if (validator.isEmpty(password)) {
            return swal({
                title: "error!",
                text: "Missing fields",
                icon: "error",
            });
        }
        else {
            store.dispatch({
                type: "login",
                payload: {
                    email: email,
                    password: password,
                    
                }
            })
            signinClose();
        }
    }
    const logOut = () => {
        store.dispatch({
            type: "logout",
        })
    }

    const classes = useStyles();

    return (
        <Navbar collapseOnSelect expand="lg" bg="light">
            <Navbar.Brand href="#home">
                {/* <Link to="/">
                    <Image src={require("../../images/logo.png")} rounded
                        style={{ height: 70, width: 140 }} /></Link> */}
                        H.R.M.S
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto" style={{  marginRight: "2%", borderRadius: 5 }} >
                    <Nav.Link as="div" className={classes.items}><Link className={classes.items} to="/">Home</Link></Nav.Link>
                    {/* <Nav.Link as="div" className={classes.items}><Link className={classes.items} to="/adminPanel">Admin</Link></Nav.Link> */}
                    <Nav.Link as="div" className={classes.items}><a className={classes.items} href="#career">Career</a></Nav.Link>
                    <Nav.Link as="div" className={classes.items}><a className={classes.items} href="#contact">About</a></Nav.Link>
                </Nav>
                {props.logedIn ?
                    <Button size="lg" className={classes.signinButton} onClick={logOut}>Logout</Button> :
                    <Button size="lg" variant="dark" className={classes.signinButton} onClick={signinShow}>Sign in</Button>
                }
                <Modal show={showSignin} onHide={signinClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sign in</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Control id="email" className={classes.formItems} type="email" placeholder="email" onChange={(e) => { setemail(e.target.value) }} />
                        <Form.Control className={classes.formItems} type="password" placeholder="Password"
                            onChange={(e) => { setpassword(e.target.value) }} />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={signinClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleSignIn}>
                            SignIn
                        </Button>


                    </Modal.Footer>
                </Modal>
                
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigationbar;