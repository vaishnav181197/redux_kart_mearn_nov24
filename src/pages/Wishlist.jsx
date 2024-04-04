import React,{useEffect} from 'react'
import { Row, Col, Card, CardBody } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishList } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'




function Wishlist() {

  const { wishlist } = useSelector(state => state.wishListReducer)
  const dispatch=useDispatch()

  useEffect(()=>{
    console.log(wishlist)
  },[])

  const handleRemove=(id)=>{
    dispatch(removeWishList(id))
      
  }
  const handleAddtoCart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeWishList(product.id))

    
  }

  return (
    <>
      <Row className='m-5 container'>

        {
          wishlist?.length!=0 ?
            wishlist?.map(item => (
              <Col sm={12} md={8} lg={6} xl={4}>
                <Card style={{ width: '16rem' }}>
                  <Link to={`/view/${item?.id}`}>
                    <Card.Img className='card-img-top' style={{ height: '200px' }} src={item?.thumbnail} />
                  </Link>
                  <Card.Body className='text-center'>
                    <Card.Title>{item?.title}</Card.Title>
                    <Card.Text>{item?.price}</Card.Text>
                    <div className='d-flex justify-content-between'>
                      <button className='btn border' onClick={()=>{handleRemove(item?.id)}}>
                        <i className="fa-solid fa-heart-circle-xmark" style={{ color: '#ff0000' }}></i>
                      </button>
                      <button className='btn border' onClick={()=>{handleAddtoCart(item)}}>
                        <i className="fa-solid fa-cart-plus" style={{ color: "#00ff00" }}></i>
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
            :
            <div className='p-5 text-center'>
              <h1>No WishList Items...</h1>
            </div>
        }


      </Row>
    </>
  )
}

export default Wishlist