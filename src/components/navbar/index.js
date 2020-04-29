import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    navItem: {
        marginRight:"5%",
        fontSize: 24
    }
}));

export default function Navbar () {
    
    const classes = useStyles();
        return (
            <div>
                <nav className="navbar navbar-light bg-light navbar-expand-md ">
                    <h1 className="navbar-brand" >HRMS</h1>
                    <div className="collapse navbar-collapse " id="navitems">
                        <ul className="navbar-nav ml-auto" style={{ marginRight: "10%" }}>
                            <li className={classes.navItem} >
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className={classes.navItem} >
                                <a className="nav-link" href="#career">Career</a>
                            </li>
                            <li className={classes.navItem} >
                                <a className="nav-link" href="#contact">About</a>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
            </div >
        )
}
