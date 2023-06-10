import React, { useState } from 'react';

const ButtonPay = () => {
  const [pay, setPay] = useState("");
  return (
    <>
        <button 
        id= "buttonPay" 
        className='button-pay'
        value={"buttonPay"}
        onClick={setPay}
        >Pagar</button>
    </>
    
  )
}

export default ButtonPay