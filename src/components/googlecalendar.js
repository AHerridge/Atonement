import React, { Component } from "react"
import Calendar from "react_google_calendar"
import Layout from "./layout"

const calendar_configuration = {
  api_key: "AIzaSyBrs9iTsZ-0ZfdjhZJGg7UE1RUtDCwR1wE",
  dailyRecurrence: 700,
  weeklyRecurrence: 500,
  monthlyRecurrence: 20,
}

export default class GoogleCalendar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: [],
    }

    calendar_configuration.calendars = [
      {
        name: "calendar",
        url: props.calendarUrl,
      },
    ]

    console.log(calendar_configuration);
  }

  render = () => (
    <Layout>
      <Calendar events={this.state.events} config={calendar_configuration} />
    </Layout>
  )
}
