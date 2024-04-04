import React,{useEffect,useState} from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'



function View() {
  const {id}=useParams()
  const [data,setData]=useState({})




  useEffect(()=>{

    const products=localStorage.getItem("products")
    setData(JSON.parse(products).find(item=>item.id==id))

  },[])
  
  console.log(data)

  return (
    <>
      <section class="py-5 container-fluid">
        <Row className='gx-4 gx-lg-5 align-items-center'>
          <Col sm={6} md={6}>
            <Image className='card-img-top mb-5 mb-md-0' src={data?.thumbnail} />
          </Col>
          <Col sm={6} md={6}>
            <div className="small mb-1">Product Id: {data?.id}</div>
            <h1 className="display-5 fw-bolder">{data.title}</h1>
            <div className=" mb-5">
              {/* <span className="text-decoration-line-through">70000</span> */}
              <span>{data?.price} RS</span><br />
              <span>{data?.discountPercentage}% OFF</span>
            </div>
            <p>Brand : {data?.brand}</p>
            <p className="lead">{data.description}</p>
            <div className="d-flex justify-content-around">
              <button className='btn border btn-lg'>
                <i className="fa-solid fa-heart-circle-plus" style={{ color: "#f10979" }}></i>
              </button>
              <button className='btn border btn-lg'>
                <i className="fa-solid fa-cart-plus" style={{ color: "#00ff00" }}></i>
              </button>
            </div>
          </Col>
        </Row>
      </section>

    </>
  )
}

export default View