import React, { useEffect, useState } from "react";
// import Testimonials from "./Testimonials";
import Reviews from "./Reviews";

function Feedback() {
    const [testimonials, setTestimonials] = useState([]);

    const API_URL = import.meta.env.VITE_API_URL;

    //Fetch testimonials data dynamically
    useEffect(() =>{
        fetch(`${API_URL}/reviews/`)
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
