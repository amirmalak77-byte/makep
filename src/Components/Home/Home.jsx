import React from 'react'
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {
const [myProduct, setmyProduct] = useState([])

  async function getHome() {

    try {
 let {data} = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick`)
 console.log(data); 
 setmyProduct(data)  
    } catch (error) {
        console.log(error);
        
    }
    }

useEffect(() => {
  getHome()
}, [])


  return (
 <>
 
 <div>
    <h1 className='text-center py-3 bg-info-subtle'>ROUGE</h1>
 </div>
<div className="row g-2">
        {myProduct.length > 0 ? (
          myProduct.map((obj) => {
            return (
              <div key={obj.id} className="col-lg-3">
                <div className="card w-100 h-100 m-2 p-2 text-center rounded-3 bg-info-subtle border">
                    <h2 className='text-black text-capitalize'>{obj.brand}</h2>
                  <img className="w-100" src={obj.image_link} alt="" />
                  <h4 className='text-black mt-3' >{obj.name}</h4>
                  <h5 className="text-black mt-2"> {obj.category} </h5>
                  <h6 className="text-black"> ${obj.price}</h6>

                </div>
              </div>
            );
          })
        ) : (
    <span class="loader"></span>


        )}
      </div>
 
 
 
 
 
 
 </>
  )
}
