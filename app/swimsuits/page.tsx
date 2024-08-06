// page.tsx
import React from 'react';
import collections from '@/data/data.json';
import PLP from '../components/PLP/PLP';

interface Swimsuits {
  id: number; 
  name: string;
  price: string;
  src: string;
}

interface Data {
  swimsuits: Swimsuits[];
}

const Page: React.FC = () => {
  const data: Data = collections;

  const swimsuits = data.swimsuits;

  return (
    <div className='PLP'>
      {swimsuits.map((item) => (
        <PLP key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Page;
