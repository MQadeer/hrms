import React, { Component } from 'react';
import officeImage from "../../images/office.png";
import Axios from "axios";
import swal from "sweetalert";
import {Modal,Spinner} from "react-bootstrap";

export default class CVform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        }
    }

    onChange = (prop, e) => {
        var obj = {};
        obj[prop] = e.target.value;
        this.setState(obj);
        console.log(this.state);
    }

    fileHandler = (e) => {
        console.log(e.target.files[0]);
        this.setState({
            resume: e.target.files[0]
        })
        console.log(this.state);
    }

    submitCV = () => {
        console.log(this.state);
        var data = new FormData();
        data.append('name', "this.state.name");
        data.append('email', this.state.email);
        data.append('phone', this.state.phone);
        data.append('status', this.state.status);
        data.append('resume', this.state.resume);
        data.append('comments', this.state.comments);

        console.log(data[0]);

        Axios.post("/client/saveCleint", data).then(res => {
            console.log(res);
        })
    }

    handleSubmit = () => {
        const info = this.state
        this.setState({
            loading: true
        })
        Axios.post("/client/saveCleint", info)
            .then(resp => {
                this.setState({
                    loading: false
                })
                if (resp.data === "success") {
                    swal({
                        title: "Message Sent!",
                        icon: "success",
                    })
                } else {
                    swal({
                        title: "Message Failed!",
                        icon: "error",
                    })
                }
            }).catch(err=>{
                this.setState({
                    loading: false
                })
                swal({
                    title: "server error!",
                    icon: "error",
                })
            })
    }


    render() {
        return (
            <div id="career" style={{
                backgroundImage: `url(${officeImage})`, height: "100%", width: "100%",
                paddingTop: "3%", marginTop: "5%"
            }}>
                <h1 style={{ textAlign: "center", color: "white", fontWeight: "bolder" }}>
                    Candidate Cv
                </h1>
                <div class="container" style={{ paddingBottom: "3%" }}>
                    <div class="row">
                        <div class="col-sm">
                            <form>
                                <div class="form-group">
                                    <label style={{ color: "white" }}>Full name</label>
                                    <input type="text" class="form-control" id="name" onChange={this.onChange.bind(this, "name")} />
                                </div>
                                <div class="form-group">
                                    <label style={{ color: "white" }}>Email address</label>
                                    <input type="email" class="form-control" id="name" placeholder="name@example.com"
                                        onChange={this.onChange.bind(this, "email")} />
                                </div>
                                <div class="form-group">
                                    <label style={{ color: "white" }}>Phone no</label>
                                    <input type="number" class="form-control" id="name" onChange={this.onChange.bind(this, "number")} />
                                </div>
                                <div class="form-group">
                                    <label style={{ color: "white" }}>Portfolio Link</label>
                                    <input type="text" class="form-control" id="name" onChange={this.onChange.bind(this, "portfolio")} />
                                </div>
                                <div class="form-group">
                                    <label style={{ color: "white" }}>Current status</label>
                                    <select class="form-control" id="status" onChange={this.onChange.bind(this, "status")}>
                                        <option> </option>
                                        <option>employed</option>
                                        <option>un-employed</option>
                                        <option>self-employed</option>
                                        <option>student</option>
                                    </select>
                                </div>
                                {/* <div class="form-group">
                                    <label style={{color:"white"}}>upload your resume</label>
                                    <input style={{color:"white"}} type="file" name="file" class="form-control-file" id="cv" 
                                    onChange={this.fileHandler}/>
                                </div> */}
                            </form>
                        </div>
                        <div class="col-sm">
                            <div class="form-group">
                                <label style={{ color: "white" }}>Comments</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="15"
                                    onChange={this.onChange.bind(this, "comments")}></textarea>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-warning btn-lg btn-block"
                        style={{ fontSize: 28, fontWeight: "bolder", color: "white" }} onClick={this.handleSubmit}>Submit</button>
                </div>
                <Modal show={this.state.loading} size="lg" centered>
                    <Spinner style={{ position: "absolute", display: "block", top: "50%", left: "50%", fontSize: 50 }}
                        animation="border" variant="light" />
                </Modal>
            </div>
        )
    }
}
