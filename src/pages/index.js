import React from "react"
import { Link } from "gatsby"

import { SEO, Jumbo } from "../components"
import "../components/layout.css"
// import { Jumbo } from "../components"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Jumbo />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/gracias/">Go to GRACIAS</Link>
  </>
  
)

export default IndexPage
