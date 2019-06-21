import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import ShoppingCart from '../images/shopping-cart-icon.svg'

const Header = ({ siteTitle }) => (
  <header>
    <div className='collapse bg-dark' id='navbarHeader'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-8 col-md-7 py-4'>
            <h4 className='text-white'>About</h4>
            <p className='text-muted'>Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
          </div>
          <div className='col-sm-4 offset-md-1 py-4'>
            <h4 className='text-white'>Contact</h4>
            <ul className='list-unstyled'>
              <li><a href='#' className='text-white'>Follow on Twitter</a></li>
              <li><a href='#' className='text-white'>Like on Facebook</a></li>
              <li><a href='#' className='text-white'>Email me</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className='navbar navbar-dark bg-dark box-shadow'>
      <div className='container d-flex justify-content-between'>
        <Link to='/' className='navbar-brand d-flex align-items-center'>
          <strong className='heading'>HostingShopper</strong>
          <ShoppingCart fill='#fff' className='ml-2' />
        </Link>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarHeader' aria-controls='navbarHeader' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
