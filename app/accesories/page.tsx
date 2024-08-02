import React from 'react';
import collections from '@/data/data.json';
import PLP from '../components/PLP/PLP';
import './page.scss'

interface Accesories {
  id: number; 
  name: string;
  price: string; 
}

interface Data {
  accesorios: Accesories[];
}

const page: React.FC = () => {
  const data: Data = collections;

  const accesorios = data.accesorios;

  return (
    <div className='PLP'>
      {accesorios.map((item) => (
        <PLP item={item}></PLP>
      ))}
    </div>
  );
};

export default page;
