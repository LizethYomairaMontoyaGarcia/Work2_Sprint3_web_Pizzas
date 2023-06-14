import React, { useContext, useState } from 'react';
import { PizzaContext } from '../../useContex/PizzaContext';

const ButtonPay = () => {
  
  const {handleClickPay} = useContext(PizzaContext)

  return (
    <>
        <button 
        id= "buttonPay" 
        className='button-pay'
        value={"buttonPay"}
        onClick={handleClickPay}
        >Pagar</button>
    </>
    
  )
}

export default ButtonPay