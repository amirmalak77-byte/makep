import axios from 'axios'
import { useState} from 'react'
import { useEffect } from 'react'
import React from 'react'

export default function Cosmetik() {
const [allProduct, setAllProduct] = useState([])
async function getProduct() {
   try {
     let {data} = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json`)
    console.log(data);
setAllProduct(data)
   } catch (error) {
    console.log(error);
    
   }
    
}

useEffect(() => {
  getProduct()
}, [])

  return (
   <>

   <h1 className='text-center bg-info-subtle p-3'>COSMETIK</h1>
   
  <div className="row g-2">
        {allProduct.length > 0 ? (
          allProduct.map((obj) => {
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
      <span className="loader">
</span>


        )}
      </div>
   
   
   
   
   
   </>
  )
}
