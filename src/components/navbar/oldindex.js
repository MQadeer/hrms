import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    navItem: {
        marginRight: "5%",
        fontSize: 24
    }
}));

export default function Navbar() {

    const classes = useStyles();
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">H.R.M.S</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: "60%" }}>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active" className={classes.navItem}>
                        <Link class="nav-link"  >Home </Link>
                    </li>
                    <li class="nav-item" className={classes.navItem}>
                        <a className="nav-link" href="#career">Career</a>
                    </li>

                    <li class="nav-item" className={classes.navItem}>
                        <a className="nav-link" href="#contact">About</a>
                    </li>
                    <li class="nav-item active" className={classes.navItem}>
                        <Link class="nav-link" to="/AdminPanel">Admin</Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
            )
}
