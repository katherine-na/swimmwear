import React from 'react';
import collections from '@/data/data.json';
import PLP from '../components/PLP/PLP';

interface Bikini {
  id: number; 
  name: string;
  price: string;
  src: string;
}

interface Data {
  bikinies: Bikini[];
}

const page: React.FC = () => {
  const data: Data = collections;

  const bikinies = data.bikinies;

  return (
    <div className='PLP'>
      {bikinies.map((item) => (
        <PLP key={item.id} item={item}></PLP>
      ))}
    </div>
  );
};

export default page;
