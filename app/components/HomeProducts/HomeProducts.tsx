import React from 'react'
import Image from 'next/image';
import './HomeProducts.scss'

interface HomeProductsProps {
  items: {
    src: string;
    name: string;
  };
}

const HomeProducts: React.FC<HomeProductsProps> = ({ items }) => {
  return (
    <div className='home-products'>
      <div>
        <Image src={items.src} alt='' width={250} height={300}></Image>
      </div>
      <div>
        <p>{items.name}</p>
      </div>
    </div>
  )
}

export default HomeProducts;