import axios from "axios";
import store from "../store";
import swal from "sweetalert";
 const employeesServices={
    getEmployees:()=>{
        console.log("in employee reducer function")
        axios.get("/employee/getEmployees")
        .then(resp=>{
            store.dispatch({
                type:"employeesRecieved",
                payload:resp.data
            })
        })
        
    },
    removeEmployee:(info)=>{
        axios.post("/employee/deleteEmployee",info)
        .then(resp=>{
            console.log("response is : ",resp);
            swal({
                title: "employee removed!",
                icon: "success",
              });
        })
        
    },
    updateEmployees:(info)=>{
        axios.post("/materials/updateMaterial",info)
        .then(resp=>{
            console.log("response is : ",resp);
            swal({
                title: "update success!",
                icon: "success",
              });
        })
        
    }
}

export default employeesServices;