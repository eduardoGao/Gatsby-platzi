import React from "react"
import { Link, graphql } from "gatsby"

import { SEO, Jumbo } from "../components"
import "../components/layout.css"
// import { Jumbo } from "../components"

export const query = graphql`
  query GET_DESCRIPTION{
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/gracias/">Go to GRACIAS</Link>
  </>
)


export default IndexPage
