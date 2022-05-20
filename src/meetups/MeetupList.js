import React from 'react'
import classes from './MeetupList.module.css'
import MeetupItem from './MeetupItem'

export default function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map(meetups => (
          <MeetupItem
            key={meetup.id}
            id={meetup.if}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address} />
            ))}
    </ul>
  )
}
