import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='container-fluid'>
        <Row className='p-5 bg-dark text-light'>
          <Col>
            <h3>ReduxCart</h3>
            <p style={{ textAlign: 'justify' }}>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </p>
          </Col>
          <Col className='d-flex align-items-center flex-column'>
            <h3>Links</h3>
            <Link to={'/wish'} className='d-block mb-3 mt-3'>Wishlist</Link>
            <Link to={'/cart'}>Cart</Link>
          </Col>
          <Col className='d-flex align-items-center flex-column'>
            <h3>References</h3>
            <a href="https://getbootstrap.com/" className='d-block mb-3 mt-3'>Bootstrap</a>
            <a href="https://react.dev/">React</a>
          </Col>
          <Col>
            <h3>Contact Us</h3>
            <p className='mt-3'>Submit your email Id, so we can contact you....</p>
            <input type="email" className='form-control mt-3' placeholder='Enter Email ID' />
            <button className='btn btn-outline-light mt-3'>Send</button>
          </Col>
          <h6 className='text-center'>ReduxCart 2024 &copy; All rights reserved..</h6>
        </Row>
      </div>

    </>
  )
}

export default Footer