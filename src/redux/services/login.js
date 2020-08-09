import axios from "axios";
import store from "../store";
import history from "../../history";
import swal from "sweetalert";
const loginServices = {
    login: (info) => {

        axios.post('/login/signIn', info)
            .then(res => {
                console.log("login success resp ", res)
                if (res.data.email == "admin") {
                    history.push("/adminPanel")
                }
                store.dispatch({
                    type: "loginSuccess",
                    payload: res.data
                })
                history.push("/adminPanel")


            })
            .catch(err => {
                history.push("/")
                swal({
                    title: "signIn failed !",
                    text: "check email or password",
                    icon: "info",
                });

                console.log("login service error ", err)
            })

    },
    logout: () => {
        console.log("in logout reducer function")
        // axios.get('/login/signOut')
        //     .then(res => {
        //         console.log("logout succes resp ", res)
        //         return store.dispatch({
        //             type: "logoutSuccess",
        //             payload: res.data
        //         })

        //     })
        //     .catch(err => {
        //         swal({
        //             title: "logout failed!",
        //             icon: "error",
        //         });
        //         console.log(err.message)
        //     })
         store.dispatch({
            type: "logoutSuccess",
        })

    },
    signup: (info) => {
        console.log("in signup reducer function", info)
        axios.post('/login/signUp', info)
            .then(res => {
                console.log(res)
                history.push("/")
                if (res.data == "success") {
                    swal({
                        title: "New Account Created!",
                        icon: "success",
                    });
                }
                else if (res.data == "duplicate") {
                    swal({
                        title: "SignUp failed!",
                        text: "this email already exists!",
                        icon: "error",
                    });
                }
            })
            .catch(err => {
                swal({
                    title: "SignUp failed!",
                    icon: "error",
                });

                console.log(err.message)
            })
    },

}

export default loginServices;