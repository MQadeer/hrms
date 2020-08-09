import axios from "axios";
import swal from "sweetalert";

const alert = {
    success:() => {
        swal({
            title: "Success!",
            icon: "success",
        })
    },
    failure:() => {
        swal({
            title: "Operation Failed!",
            icon: "error",
        })
    }
}

const op = {

    addLoan: (info) => {
        console.log("in loan function")
        axios.post("/employee/addLoan", info)
            .then(resp => {
                console.log("loan response  ",resp)
                if (resp.data == "success") {
                    alert.success();
                }else{
                    alert.failure();
                }

            })
    },
    addLeave: (info) => {
        console.log("in leave function")
        axios.post("/employee/addLeave", info)
            .then(resp => {
                if (resp.data === "success") {
                    alert.success();
                }else{
                    alert.failure();
                }
            })
    },
    updateEmployee: (info) => {
        console.log("in leave function")
        axios.post("/employee/updateEmployee", info)
            .then(resp => {
                if (resp.data === "success") {
                    alert.success();
                }else{
                    alert.failure();
                }
            })
    }
}

export default op