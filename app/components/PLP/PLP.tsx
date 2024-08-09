import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./PLP.scss";
import Counter from "../counter/counter";
interface SwimsuitProps {
  item: {
    id: number;
    name: string;
    price: string;
    src: string;
  };
}

const PLP: React.FC<SwimsuitProps> = ({ item }) => {
  return (
    <div key={item.id} className="item-plp">
      <div className="product-img">
        <Link href="/login">
          <Image
            src={item.src}
            width={180}
            height={230}
            alt={item.name}
            className="product-image"
          />
        </Link>
      </div>
      <div className="product-detail">
        <div>
          <p className="product-name">{item.name}</p>
          <p>{item.price}</p>
        </div>
        <Counter />
      </div>
    </div>
  );
}

export default PLP;