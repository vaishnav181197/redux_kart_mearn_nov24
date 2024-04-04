import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { fetchProductsThunk } from '../redux/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import { addToWishList } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';
import { onNavigatePrev,onNavigateNext } from '../redux/slices/productSlice';

function Home() {

  const dispatch = useDispatch()

  const { product, loading, error, currentPage, ProductsPerPage } = useSelector((state) => state.productReducer)

  const totalPages = Math.ceil(product?.length / ProductsPerPage)
  const indexOfLastItem = currentPage * ProductsPerPage
  const indexOfFirstItem = indexOfLastItem - ProductsPerPage
  const validCards = product?.slice(indexOfFirstItem, indexOfLastItem)

  const { wishlist } = useSelector((state) => state.wishListReducer)

  useEffect(() => {
    dispatch(fetchProductsThunk())
  }, [])
  // console.log(product)

  const handleAddWishList = (product) => {
    const existingProduct = wishlist.find(item => item.id == product.id)
    if (existingProduct) {
      alert("Already Added!!")
    }
    else {
      dispatch(addToWishList(product))
      alert("Added to Wishlist")
    }
  }

  const navigatePrev=()=>{
    if(currentPage!=1){
      dispatch(onNavigatePrev())
    }
  }

  const navigateNext=()=>{
    if(currentPage!=totalPages){
      dispatch(onNavigateNext())
    }
  }

  return (
    <>
      <header class="bg-dark py-5">
        <Carousel>
          <Carousel.Item>
            <img src="src\assets\ban1.jpg" height={'400px'} className='w-100' alt="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="src\assets\ban2.jpg" height={'400px'} className='w-100' alt="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="src\assets\ban3.jpg" height={'400px'} className='w-100' alt="img" />
          </Carousel.Item>
        </Carousel>
      </header>
      {
        !loading && error &&
        <div className='display-3 text-danger'>{error}</div>
      }
      {
        loading ?
          <div className='p-5 d-flex justify-content-center'>
            <Spinner
              as="span"
              animation="border"
              size="xl"
              role="status"
              aria-hidden="true"
            />Loading...
          </div>
          : !error &&

          <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
              <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">


                {
                  product.length > 0 ?
                    validCards?.map((item) => (
                      <div className="col mb-5">
                        <div className="card h-100">
                          <Link to={`/view/${item.id}`}>
                            <img className="card-img-top" src={item.thumbnail} height={'180px'} alt="..." />
                          </Link>
                          <div className="card-body p-4">
                            <div className="text-center">
                              <h5 className="fw-bolder">{item.title.slice(0, 10)}...</h5>
                              {item.price}
                            </div>
                            <div className='d-flex justify-content-between'>
                              <button className='btn border' onClick={() => { handleAddWishList(item) }}>
                                <i className="fa-solid fa-heart-circle-plus" style={{ color: "#f10979" }}></i>
                              </button>
                              <button className='btn border' onClick={() => { dispatch(addToCart(item)) }}>
                                <i className="fa-solid fa-cart-plus" style={{ color: "#00ff00" }}></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                    :
                    <div className='text-danger display-4'>No Products Found!!!</div>
                }



              </div>

              <div className='text-center'>
                <button className='btn' onClick={navigatePrev}>
                  <i className="fa-solid fa-angles-left"></i>
                </button>
                <span>{currentPage}/{totalPages}</span>
                <button className='btn' onClick={navigateNext}>
                  <i className="fa-solid fa-angles-right"></i>
                </button>
              </div>

            </div>
          </section>
      }

    </>
  )
}

export default Home