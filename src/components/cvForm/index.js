import React, { Component } from 'react';
import officeImage from "../../images/office.png"

export default class CVform extends Component {
    render() {
        return (
            <div  id="career" style={{ backgroundImage: `url(${officeImage})`, height: 700, width: "100%",
             paddingTop: "3%",marginTop:"5%" }}>
                <h1 style={{ marginLeft: "42%", color: "white",fontWeight:"bolder" }}>
                    Candidate Cv
                </h1>
                <div  class="container">
                    <div class="row">
                        <div class="col-sm">
                            <form>
                                <div class="form-group">
                                    <label for="name" style={{ color: "white" }}>Full name</label>
                                    <input type="text" class="form-control" id="name" />
                                </div>
                                <div class="form-group">
                                    <label for="name" style={{ color: "white" }}>Email address</label>
                                    <input type="email" class="form-control" id="name" placeholder="name@example.com" />
                                </div>
                                <div class="form-group">
                                    <label for="name" style={{ color: "white" }}>Phone no</label>
                                    <input type="number" class="form-control" id="name" />
                                </div>
                                <div class="form-group">
                                    <label for="status" style={{ color: "white" }}>Current status</label>
                                    <select class="form-control" id="status">
                                        <option>employed</option>
                                        <option>un-employed</option>
                                        <option>self-employed</option>
                                        <option>student</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="cv" style={{color:"white"}}>upload your resume</label>
                                    <input type="file" class="form-control-file" id="cv"/>
                                </div>
                            </form>
                        </div>
                            <div class="col-sm">
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1" style={{ color: "white" }}>Comments</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="14"></textarea>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-warning btn-lg btn-block" 
                        style={{fontSize:28,fontWeight:"bolder",color:"white"}}>Submit</button>
                    </div>
                </div>
        )
    }
}
