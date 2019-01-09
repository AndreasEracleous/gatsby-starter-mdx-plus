import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Headroom from 'react-headroom'

export default () => (
  <StaticQuery
    query={graphql`
      {
        allMdx (
          sort: {
            fields: [frontmatter___sort]
            order: ASC
          }
        ){
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
      <Headroom>
        <ul>
          {data.allMdx.edges.map(({ node }, index) => (
            <li key={index}><Link to={node.fields.slug}>{node.frontmatter.linktitle}</Link></li>
          ))} 
        </ul>       
      </Headroom>
    )}
  />
)
