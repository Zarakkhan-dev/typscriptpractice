import React, { useEffect, useRef, useState } from 'react';

const Addclass = () => {
const [active_class,setActive] = useState(false);

const handleClick =()=>{
    setActive(!active_class)
}
useEffect(()=>{

    const interval =setInterval(() => {
        setActive(false)
    }, 1000);
   return () => clearInterval(interval);
},[])
  return (
    <div>
    {/* Apply the ref to the div and add the onClick handler */}
    <div className={`div ${active_class ? "active":""}`}  onClick={handleClick}>
      Click me to toggle class
    </div>
    
  </div>
  )
}

export default Addclass
