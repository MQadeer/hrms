import loginServices from "../services/login";
import history from "../../history";
import swal from "sweetalert";

const loginReducer = (state = {
    login: {}, signupSuccess: false, logedIn: false, user: {},
    openSignup: false, contactRequests: [], allChats: []
}, action) => {
    switch (action.type) {
        case "login":
            loginServices.login(action.payload);
            return state
        case "loginSuccess":
            swal({
                title: "Logged in!",
                icon: "success",
            });
            console.log("login services user :", action.payload)
            return { logedIn: true, user: action.payload }
        case "logout":
            // loginServices.logout();
            history.push("/")
            swal({
                title: "Logged out!",
                icon: "success",
            });
            return { logedIn: false, }
        case "logoutSuccess":
            swal({
                title: "Logged out!",
                icon: "success",
            });
            return { logedIn: false }
        default:
            return state
    }
}

export default loginReducer;