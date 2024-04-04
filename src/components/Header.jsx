import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { searchProduct } from '../redux/slices/productSlice';


function Header() {

    const {wishlist}=useSelector(item=>item.wishListReducer)
    const cartlist=useSelector(item=>item.cartReducer)
    const dispatch=useDispatch()

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>
                        <Link to={'/'} className='text-dark text-decoration-none'>
                            <i className="fa-solid fa-cart-shopping me-1" style={{ color: '#050505' }}></i>
                            ReduxCart
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Item className=' rounded me-3'>
                                <input type="text" name="search" id="mk" onChange={(e)=>{dispatch(searchProduct(e.target.value.toLowerCase()))}} className="form-control" placeholder='Search products by Names' />
                            </Nav.Item>
                            <Nav.Item className='btn border border-dark rounded me-3'>
                                <Link to={'/wish'} className='text-decoration-none text-dark'>
                                    <i className="fa-solid fa-heart me-1" style={{ color: '#df0c7c' }}></i>
                                    WishList
                                    <Badge bg="secondary ms-1">{wishlist?.length}</Badge>
                                </Link>
                            </Nav.Item>
                            <Nav.Item href="#link" className='btn border border-dark rounded'>
                                <Link to={'/cart'} className='text-decoration-none text-dark'>
                                    <i className="fa-solid fa-cart-shopping me-1" style={{ color: '#63E6BE' }}></i>
                                    Cart
                                    <Badge bg="secondary ms-1">{
                                        cartlist?.length>0?
                                        cartlist?.length
                                        :
                                        0
                                    }</Badge>
                                </Link>
                            </Nav.Item>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header