import React, { Component } from 'react';
import { Icon } from '@material-ui/core';
import Navigationbar from "../navbar/index";
import Testimonies from "../testimonies/index";
import CVform from "../cvForm/index";
import officeImage from "../../images/office3.jpg"
import Footer from "../footer/index";
import ImageSlider from "../imageSlider/index";
import { connect } from "react-redux";


 class NHome extends Component {
    render() {
        return (
            <div style={{ width: "100%" }}>
                {/* <header  style={{
                    width: "100%", height: "15%", backgroundColor: config.appColor,
                    paddingTop: "0.5%", paddingBottom: "0.5%", alignItems: "center"
                }}>
                    <div class="row" style={{ display: "flex", alignItems: "center",color:"white"}}>
                        <div class="col">
                            <Icon style={{fontSize:20,marginTop:"1%"}}>mail</Icon><text style={{fontSize:20,}}>Ranaafeef123@gmail.com</text>
                            <Icon style={{ marginLeft: "2%" }}>phone</Icon><text>0333-4565654</text>
                        </div>
                        <div class="col">
                            <Icon style={{ marginLeft: "65%", color: "yellow" }} >person</Icon>
                            <Link style={{ color: "yellow" }} to="/AdminPanel">Admin</Link>
                        </div>
                    </div>
                </header> */}
                <Navigationbar logedIn={this.props.logedIn} userinfo={this.props.user}/>

                <ImageSlider />
                <div class="container" >
                    <h1 style={{ color: "black", textAlign: "center", fontSize: 50, fontWeight: "bolder" }}>About Us</h1>
                    <div class="row justify-content-md-center">
                        <div class="col-md-auto">
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
                        <div class="col-md-auto">
                            <img src={require("../../images/employee1.png")} />
                        </div>
                    </div>

                </div>
                <div style={{ backgroundImage: `url(${officeImage})`, height: 270, width: "100%", marginTop: "3%", paddingTop: "7%" }}>
                    <h3 style={{ alignItems: "center", marginLeft: "25%", color: "white", fontSize: 35 }}>
                        Whether we play a large or small role, by working <br />
                        together we achieve our objectives.
                    </h3>
                </div>

                <div style={{ display: "flex", marginTop: "10%", flexDirection: "column" }}>
                    <h1 style={{ color: "black", fontSize: 50, fontWeight: "bolder", textAlign: "center" }}>Selection Process</h1>
                    <img src={require("../../images/selection.jpg")} style={{ height: "100%", width: "100%" }} />
                </div>

                <CVform />
                <Testimonies />
                <Footer />

            </div>
        )
    }
}

const loginStatus = (store) => {
    console.log("loged in user ", store.loginReducer.user)
    console.log("login status ", store.loginReducer.logedIn)
    return { logedIn: store.loginReducer.logedIn, user: store.loginReducer.user }
}

let Home = connect(loginStatus)(NHome);
export default Home;