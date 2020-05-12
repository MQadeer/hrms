import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Icon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    contactItem: {
        display:"flex",
        marginTop: "4%",
        alignItems:"center"
    },
    contactText: {
        marginRight: 50,
    },
    about: {
        color: "grey",
        fontSize: 18
    }

}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div id="contact" style={{
            height: "100%", backgroundColor: "#323232", width: "100%",
            paddingTop: "3%", marginTop: "5%"
        }}>
            <div class="container" style={{ backgroundColor: "#323232" }}>
                <div class="row">
                    <div class="col-sm">
                        <h3 style={{ color: "white" }}>About us</h3>
                        <p className={classes.about}>
                            We are a group of people who work to gether <br />
                            to provide others with necessory opportunities<br />
                            to advance their career.<br />
                            we work in collaboration with other organisation<br />
                            to provide more efficient services to new talents.
                        </p>
                    </div>
                    <div class="col-sm" style={{ color: "grey", display: "flex", flexDirection: "column" }}>
                        <h3 style={{ color: "white" }}>Contact info</h3>
                        <div className={classes.contactItem}>
                            <Icon >place</Icon><span className={classes.contactText}>Chenab market Faisalabad,Pakistan</span>
                        </div>
                        <div className={classes.contactItem}>
                            <Icon>mail</Icon><span>Ranaafeef123@gmail.com</span>
                        </div>
                        <div className={classes.contactItem}>
                            <Icon>phone</Icon><span>0333-4565654</span>
                        </div>
                    </div>
                </div>
                <p style={{ color:"white",marginTop:"3%" }}>© 2020 Soft. All rights reserved | Design by Rana Afeef</p>

            </div>
        </div>
    )
}
