import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const SecondPage = ({ location }) => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <p>
      Location state (should never be <code>undefined</code>):{" "}
      <strong>
        {typeof location.state === "undefined"
          ? "undefined"
          : JSON.stringify(location.state)}
      </strong>
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
