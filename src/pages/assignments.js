import React, { Component } from "react"
import img1 from "../images/WS_April_2018_1.jpg"
import img2 from "../images/WS_April_2018_2.jpg"
import Image from "react-bootstrap/Image"
import Layout from "../components/layout"

export default class assignments extends Component {
  render() {
    return (
      <Layout>
        <Image src={img1} fluid />
        <Image src={img2} fluid />
      </Layout>
    )
  }
}
