import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import get from 'lodash.get'

const Post = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const preview = get(data, 'markdownRemark.frontmatter.cover_image.childImageSharp.fixed.src')
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={preview}
      />
      <div className='container my-5' style={{ maxWidth: '740px' }}>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div
          style={{
            maxWidth: '740px',
            xHeightMultiplier: '0.375',
            baselineMultiplier: '0.17',
            letterSpacing: '.01rem',
            fontWeight: '400',
            fontStyle: 'normal',
            fontSize: '21px',
            lineHeight: '1.58em'
          }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel='prev'>
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel='next'>
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        cover_image {
          publicURL
          childImageSharp {
            fixed(width: 1200, height: 630) {
              src
            }
            sizes(maxWidth: 1240 ) {
              srcSet
            }
          }
        }
      }
    }
  }
`
