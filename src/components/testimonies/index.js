import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: "row",
    marginTop: "5%"

  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginLeft: "40%"
  },
  content: {
    justifyContent: "center",
    justifyItems: "center",
    alignItems: 'center',
    marginLeft: "5%",


  },
  p: {
    marginTop: "5%",
    fontSize: 20
  },
  h: {
    marginLeft: "40%"
  }
}));

export default function Testimonies() {
  const classes = useStyles();

  return (
    <div>
      <h1 style={{ marginTop: "3%",textAlign:"center", fontWeight: "bolder" }}>Testimonials</h1>
      <div className={classes.root}>
        <div className={classes.content}>
          <Avatar alt="Remy Sharp" src={require('../../images/person.jpg')} className={classes.large} />
          <p className={classes.p}>
            "At first i was hesitant to whether contact an online
            service or not but it was such a wonderfull experience.
            I was finally able to getto the place i wanted to."
        </p>
          <h4 className={classes.h}>Martha</h4>
        </div>
        <div className={classes.content}>
          <Avatar alt="Remy Sharp" src={require('../../images/person2.jpg')} className={classes.large} />
          <p className={classes.p}>
            "At first i was hesitant to whether contact an online
            service or not but it was such a wonderfull experience.
            I was finally able to getto the place i wanted to."
        </p>
          <h4 className={classes.h}>john</h4>
        </div>
        <div className={classes.content}>
          <Avatar alt="Remy Sharp" src={require('../../images/person.jpg')} className={classes.large} />
          <p className={classes.p}>
            "At first i was hesitant to whether contact an online
            service or not but it was such a wonderfull experience.
            I was finally able to getto the place i wanted to."
          </p>
          <h4 className={classes.h}>Martha</h4>
        </div>
      </div>
    </div>
  );
}
