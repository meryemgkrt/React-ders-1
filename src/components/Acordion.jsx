import React from "react";

import { useState } from "react";

const Acordion = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-secondary p-3 rounded m-5">
      <div className="d-flex justify-content-between">
        <h3>
            {props.title}
        </h3>
        <p onClick={()=> setIsOpen(!isOpen)}
         className="p1 fs-1 cursor-pointer">{isOpen ? "-" : "+"} </p>
      </div>

      {/*isOpen koşuluna göre içeriği ekrana basma */}
      {
        isOpen  && <p>{props.content}</p>
      }
      
    </div>
  );
};

export default Acordion;
