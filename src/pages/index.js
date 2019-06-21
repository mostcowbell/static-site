import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import BlogPreview from '../components/BlogPreview'

const IndexPage = ({ data }) => {
  console.log('data', data)
  return (
    <Layout>
      <SEO title='Home' />
      <section className='jumbotron text-center'>
        <div className='container'>
          <h1 className='jumbotron-heading'>Album example</h1>
          <p className='lead text-muted'>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
          <p>
            <a href='#' className='btn btn-primary my-2'>Main call to action</a>
            <a href='#' className='btn btn-secondary my-2'>Secondary action</a>
          </p>
        </div>
      </section>
      <div className='album py-5 bg-light'>
        <div className='container'>
          <div className='row'>
            {
              data.allMarkdownRemark.edges.map(({ node }) => (
                <div className='col-md-4'>
                  <BlogPreview {...node} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___title }
      limit: 1000
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          html
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            cover_image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 350, maxHeight: 160) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
