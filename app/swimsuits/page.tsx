import React from 'react';
import collections from '@/data/data.json';
import PLP from '../components/PLP/PLP';

interface Swimsuits {
  id: number; 
  name: string;
  price: string; 
}

interface Data {
  swimsuits: Swimsuits[];
}

const page: React.FC = () => {
  const data: Data = collections;

  const swimsuits = data.swimsuits;

  return (
    <div className='PLP'>
      {swimsuits.map((item) => (
        <PLP item={item}></PLP>
      ))}
    </div>
  );
};

export default page;
