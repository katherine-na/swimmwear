import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./PLP.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function PLP({ item }) {
  return (
    <div key={item.id} className="item-plp">
      <div className="product-img">
        <Link href={`/bikini/${item.id}`}>
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
        <button>
          Add to  <FontAwesomeIcon icon={faCartShopping} className="icon-cart" />
        </button>
      </div>
    </div>
  );
}
