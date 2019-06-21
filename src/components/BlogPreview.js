import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const BlogPreview = ({ excerpt, frontmatter, fields }) => {
  return (
    <Link className='card mb-4 box-shadow' to={fields.slug}>
      <Img fluid={frontmatter.cover_image.childImageSharp.fluid} alt={frontmatter.title} className='rounded-top' />
      <div className='card-body'>
        <div className='card-title'>{frontmatter.title}</div>
        <p className='card-text'>{excerpt}</p>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='btn-group'>
            <button type='button' className='btn btn-sm btn-outline-secondary'>View</button>
            <button type='button' className='btn btn-sm btn-outline-secondary'>Edit</button>
          </div>
          <small className='text-muted'>9 mins</small>
        </div>
      </div>
    </Link>
  )
}

export default BlogPreview
