import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    items: {
        color: "black",
        fontSize: 20,
        borderRadius: 5,
        '&:hover': {
            backgroundColor: "black",
            color:"white",
            textDecoration:"none"

            
        }
    },
    signinButton:{
        backgroundColor:"black",
        '&:hover': {
            color:"black",
            backgroundColor: "white",
        }
    },
    formItems:{
        marginTop:"3%"
    }

}));

export default useStyles