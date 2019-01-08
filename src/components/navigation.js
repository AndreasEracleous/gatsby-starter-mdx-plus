import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
              frontmatter
                {
                  linktitle
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <ul>
          {data.allMdx.edges.map(({ node }, index) => (
            <li key={index}><Link to={node.fields.slug}>{node.frontmatter.linktitle}</Link></li>
          ))} 
        </ul>       
      </>
    )}
  />
)
