import React, { useEffect, useState } from "react";
// import Testimonials from "./Testimonials";
import Reviews from "./Reviews";

function Feedback() {
    const [testimonials, setTestimonials] = useState([]);

    //Fetch testimonials data dynamically
    useEffect(() =>{
        fetch("http://127.0.0.1:5555/testimonials")
        .then((res)=>res.json())
        .then(setTestimonials)
      },[]);

  return (
    <div>
      {/* <Testimonials testimonials={testimonials} setTestimonials={setTestimonials}/> */}
      <Reviews reviews={testimonials}/>
    </div>
  );
}

export default Feedback;
