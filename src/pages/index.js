import React from "react"

import Layout from "../components/layout"

const IndexPage = ({ navigate }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <button
      type="button"
      onClick={() => navigate("page-2", { state: { success: true } })}
    >
      Go to page 2 (with location state)
    </button>
  </Layout>
)

export default IndexPage
