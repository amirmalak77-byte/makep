import React from 'react'
import cover1 from "../../assets/cover1.png";
import cover2 from "../../assets/coverCenter.png";
import cover3 from "../../assets/cover3.png";
import cover4 from "../../assets/cover4.png";
import cover5 from "../../assets/cover5.png";

export default function MakeUp() {
  return (
    <>
    
    <div className="row ">
          <div className="header text-center pt-3 mb-5 d-flex flex-wrap justify-content-center ">
            <h1 className='mb-4 mt-4'>MakeUp API</h1>
            <p className=" text-secondary ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              cum illum soluta reprehenderit earum totam reiciendis natus non
              officiis doloremque ex, quae iste, eos doloribus.
            </p>
          </div>

          <div className="header mt-5 vh-100">
            <div className="photo">
              <img src={cover1} alt="" />
            </div>
            <div className="photoImg">
              <img src={cover2} alt="" />
            </div>
            <div className="photo">
              <img  src={cover3} alt="" />
            </div>
            
            <div className="photo">
              <img  src={cover4} alt="" />
            </div>
            <div className="photo">
              <img src={cover5} alt="" />
            </div>
            
          </div>
        </div>
    
    
    </>
  )
}
