import React, { useState } from 'react'

function Card({cart,setCart}) {
  return <div className="col mb-5">
  <div className="card h-100">
      <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem",right: "0.5rem"}}>Sale</div>
      <img className="card-img-top" src="https://www.shutterstock.com/image-photo/stability-cushion-running-shoes-new-260nw-1958445436.jpg" alt="..." />
      <div className="card-body p-4">
          <div className="text-center">
              <h5 className="fw-bolder">Sale Item</h5>
              <span className="text-muted text-decoration-line-through">$50.00</span>
              $25.00
          </div>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>{setCart(cart+1);console.log(cart)}}>
            Add to cart</button>
            </div>
      </div>
  </div>
</div>
}

export default Card