import React, { Component } from "react"
import Layout from "../../components/layout"
import GoogleCalendar from "../../components/googlecalendar"

export default class Church extends Component {
  render = () => (
    <Layout>
      <GoogleCalendar calendarUrl="gd87gdphv8as3d59a40d33bm0k@group.calendar.google.com" />
    </Layout>
  )
}
