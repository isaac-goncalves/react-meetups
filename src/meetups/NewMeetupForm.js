import React from "react";
import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

export default function NewMeetupForm() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="adress">Meetup Adress</label>
          <input type="text" required id="adress" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea type="text" required rows="5" id="description" />
        </div>
        <div>
          <button className={classes.bop}>Add meetups</button>
        </div>
      </form>
    </Card>
  );
}
