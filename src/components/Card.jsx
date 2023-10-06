import React from "react";
//*props= birleşen özelliklerini ekrana basmaya yarar
const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <img src={props.img} />
      <h1>Kullanıcı Adı:{props.name} </h1>
      <h1>Kullanıcı Soyadı:{props.surname}</h1>
      {/*
       * Koşullu renderlama
       * Boy değeri varsa ekrana bas
       * Yoksa boy değeri yazma
       * 
       * {/*
*Ternary :
{props.height ? (
        <h1>
            Kullanıcı Boyu:
            {props.height}
        </h1>
       ) : (
        ""
       )}

* Yöntem 2 
* && ve
* elsa durumunda ekrana hiçbir şey yazmaz
 */}
       
       {props.height && (
        <h1>
            Kullanıcı Boyu:
            {props.height}
        </h1>
       )}
     
    </div>
  );
};


export default Card;

