// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";	

// function ScrollToTop() {
//     const location = useLocation();
    
//     useEffect(() => {
//         console.log('Pathname changed:', location.pathname);
//         window.scrollTo(0, 0);
//     }, [location.pathname]);

//     return null;
// }

// export default ScrollToTop;

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// function ScrollToTop() {
//     const location = useLocation();

//     useEffect(() => {
//         console.log('Pathname changed:', location.pathname);
//         // Delay scrolling to top by a slight amount to ensure the DOM is fully loaded
//         setTimeout(() => {
//             window.scrollTo(0, 0);
//         }, 0);
//     }, [location]);

//     return null;
// }

// export default ScrollToTop;


import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Ensure the scroll happens after the DOM is rendered
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [location]);

  // Also ensure that we scroll to top on initial page load (refresh)
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

  return null;
}

export default ScrollToTop;
