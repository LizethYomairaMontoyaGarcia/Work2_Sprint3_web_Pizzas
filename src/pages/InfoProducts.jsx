import React from 'react'
import LayoutHomeUp from '../layout/LayoutHomeUp'
import LayoutHomeDown from '../layout/LayoutHomeDown'
import ButtonSearchProducts from '../components/buttons/buttonSearch/ButtonSearchProducts'

const InfoProducts = () => {
  return (
    <>
      <LayoutHomeUp />
        <ButtonSearchProducts />
      <LayoutHomeDown />
    </>
  )
}

export default InfoProducts