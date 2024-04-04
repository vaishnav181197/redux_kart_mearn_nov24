import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCart, emptyCart,incQuantity,decQuantity } from '../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'



function Cart() {

  const data = useSelector((state) => state.cartReducer)
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(data)
  useEffect(() => {
    if (data.length > 0) {
      setCartCount(data?.length)
      setCartTotal(data?.map(item => item.quantity * item.price)?.reduce((total, item) => total + item))
    } else {
      setCartCount(0)
      setCartTotal(0)
    }
  }, [data])

  const handleCheckout = () => {
    dispatch(emptyCart())
    alert("Complete list Checked Out!!")
    navigate('/')
  }

  const handleDecrement=(item)=>{
    if(item?.quantity!=0){
      dispatch(decQuantity(item?.id))
    }
    else{
      dispatch(removeCart(item?.id))
    }
  }

  return (
    <>
      <div className='conatiner p-5'>
        <div className='row'>
          <div className="col-lg-8 p-3">
            <h3>Cart Summery</h3>
            {
              data?.length > 0 ?
                <table className="table table-bordered border shadow bg-light">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Product Name</th>
                      <th>Product Image</th>
                      <th>Product Price</th>
                      <th>Quantity</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data?.map((item) => (
                        <tr>
                          <td>{item?.id}</td>
                          <td>{item?.title}</td>
                          <td>
                            <img className='' height={'180px'} src={item?.thumbnail} alt="" />
                          </td>
                          <td>{item?.price}</td>
                          <td>
                            <div className='d-flex'>
                              <button className='btn' onClick={()=>{dispatch(incQuantity(item?.id))}}>+</button>
                              <input type="text" value={item?.quantity} className="form-control w-25" />
                              <button className='btn' onClick={()=>{handleDecrement(item)}}>-</button>
                            </div>
                          </td>
                          <td className='pt-5'>
                            <span className='btn'>
                              <i className="fa-solid fa-trash" style={{ color: "#ec0941", }} onClick={() => { dispatch(removeCart(item?.id)) }} />
                            </span>
                          </td>
                        </tr>
                      ))

                    }

                  </tbody>
                </table>
                :
                <h4>No Cart Items</h4>
            }

          </div>
          <div className="col-lg-4 pt-5">
            <div className='border shadow p-5 w-100'>
              <h5>Total Products: <span className='text-info'>{cartCount}</span></h5>
              <h3>Total Amount: <span className='text-warning'>{cartTotal}</span></h3>
            </div>
            <div className='d-grid'>
              <button className='btn btn-block mt-3 btn-success' onClick={handleCheckout}>CheckOut</button>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart