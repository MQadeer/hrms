import employeesServices from "../services/employees";
import history from "../../history";

const employeesReducer = (state = { employees: [],requests:[] }, action) => {
    switch (action.type) {
        case "getEmployees":
            employeesServices.getEmployees();
            return state
        case "employeesRecieved":
            console.log("reducer : ", action.payload)
            return { employees: action.payload }
        case "removeEmployee":
            employeesServices.removeEmployee(action.payload)
            return state
        case "updateEmployees":
            employeesServices.updateEmployees(action.payload)
            console.log("reducer updated employees : ", action.payload)
            return state
        case "getClients":
            console.log("request reducer : ", action.payload)
            return {requests:action.payload}
        default:
            return state
    }
}

export default employeesReducer;