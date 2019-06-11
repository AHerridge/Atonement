import React, { Component } from "react"
import Layout from "../../components/layout"
import GoogleCalendar from "../../components/googlecalendar"

export default class Preschool extends Component {
  render = () => (
    <Layout>
      <GoogleCalendar calendarUrl="lflmj95miuard2os46v86ar6tg@group.calendar.google.com" />
    </Layout>
  )
}
