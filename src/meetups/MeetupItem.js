import React from "react";
import classes from "./Meetupitem.module.css";

export default function meetupItem(props) {
  return (
    <li>
      <div>
        <img className={classes.image} src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3 className={classes.title}>
          {props.title}
        </h3>
        <address className={classes.address}>
          {props.address}
        </address>
        <p className={classes.description}>
          {props.description}
        </p>
      </div>
      <div>
        <button>To Favorites</button>
      </div>
    </li>
  );
}
