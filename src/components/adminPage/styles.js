import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    items: {
        color: "white",
        fontSize: 20,
        '&:hover': {
            backgroundColor: "black",
            color:"white",
            textDecoration:"none"

            
        }
    },
    tab: {
        color: "white",
        marginTop:"2%",
        marginLeft:"5%",
        borderRadius: 5,
        
    },
    signinButton:{
        backgroundColor:"black",
        '&:hover': {
            color:"black",
            backgroundColor: "white",
        }
    },

}));

export default useStyles