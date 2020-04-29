import React, { Component } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import config from '../../config';
import { Icon } from '@material-ui/core';
import Navbar from "../navbar/index";
import Testimonies from "../testimonies/index";
import CVform from "../cvForm/index";
import officeImage from "../../images/office3.jpg"
import Footer from "../footer/index";
import {Link} from "react-router-dom";


export default class Home extends Component {
    render() {
        const images = [
            { url: require("../../images/2.jpg") },
            { url: require("../../images/3.jpg") },
            { url: require("../../images/4.jpg") },
        ];
        return (
            <div style={{width:"100%"}}>
                <header style={{
                    width: "100%", height: "15%", backgroundColor: config.appColor,
                    paddingTop: "0.5%", paddingBottom: "0.5%", alignItems: "center"
                }}>
                   <span style={{ display: "flex", alignItems: "center", color: "white",marginLeft:"5%" }}>
                        <Icon >mail</Icon><text>Ranaafeef123@gmail.com</text>
                        <Icon style={{marginLeft:"2%"}}>phone</Icon><text>0333-4565654</text>
                        <Icon style={{marginLeft:"65%",color:"yellow"}} >person</Icon>
                        <Link style={{color:"yellow"}} to="/AdminPanel">Admin Login</Link>
                    </span>
                    
                </header>
                <Navbar />
                <div>
                    <SimpleImageSlider width="100%" height="80%" slideDuration={0.5}
                        images={images} />
                </div>
                <h1 style={{ marginTop: "38%", color: "black", marginLeft: "45%", fontSize: 50,fontWeight:"bolder" }}>About Us</h1>
                <div style={{ display: "flex", flexDirection: "row", marginTop: "5%", marginLeft: "20%" }}>
                    <div>
                        <h1>Employment opportunities for<br /> Professionals</h1>
                        <p style={{ color: "grey", marginTop: "7%" }}>
                            We are here to provide you with the best employement opportunities<br />
                            according to to your carreer perspective and your profile.We are <br />
                            connected to many recruitment centers who constantly look for talented and<br />
                            ambitious people.<br />
                        </p>
                        <span style={{ display: "flex", alignItems: "center", marginTop: "5%", alignContent: "center" }}>
                            <Icon style={{ color: "lightGreen", fontSize: 30 }}>business_center</Icon>
                            <p style={{ marginLeft: "5%", fontWeight: "bold", fontSize: 25 }}>80 Corporate Programs </p>
                        </span>
                        <span style={{ display: "flex", alignItems: "center", marginTop: "3%", alignContent: "center" }}>
                            <Icon style={{ color: "lightGreen", fontSize: 30 }}>school</Icon>
                            <p style={{ marginLeft: "5%", fontWeight: "bold", fontSize: 25 }}>49 Training Courses</p>
                        </span><span style={{ display: "flex", alignItems: "center", marginTop: "3%", alignContent: "center" }}>
                            <Icon style={{ color: "lightGreen", fontSize: 30 }}>person</Icon>
                            <p style={{ marginLeft: "5%", fontWeight: "bold", fontSize: 25 }}>88 Strategic Partners </p>
                        </span><span style={{ display: "flex", alignItems: "center", marginTop: "3%", alignContent: "center" }}>
                            <Icon style={{ color: "lightGreen", fontSize: 30 }}>poll</Icon>
                            <p style={{ marginLeft: "5%", fontWeight: "bold", fontSize: 25 }}>436 Companies We Helped </p>
                        </span>
                    </div>
                    <img src={require("../../images/employee1.png")} />
                </div>

                
                <div style={{ backgroundImage: `url(${officeImage})`, height: 270, width: "100%", marginTop: "3%", paddingTop: "7%" }}>
                    <h3 style={{ alignItems: "center", marginLeft: "25%", color: "white", fontSize: 35 }}>
                        Whether we play a large or small role, by working <br />
                        together we achieve our objectives.
                    </h3>
                </div>
                
                <div style={{ marginTop: "10%" }}>
                    <h1 style={{ color: "black", marginLeft: "36%", fontSize: 50,fontWeight:"bolder" }}>Selection Process</h1>
                    <img src={require("../../images/selection.jpg")} style={{ marginLeft: "5%" }} />
                </div>

                <CVform />
                <Testimonies />
                <Footer/>
                
            </div>
        )
    }
}


