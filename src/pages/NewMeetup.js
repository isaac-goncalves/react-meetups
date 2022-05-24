import React from "react";
import NewMeetupsForm from "../meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

export default function NewMeetups() {
const history = useHistory();

  function AddMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-96008-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(() => {
      history.replace('/');
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupsForm onAddMeetup={AddMeetupHandler} />
    </section>
  );
}
