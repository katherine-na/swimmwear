import React from "react";
import Image from "next/image";
import "./globals.scss";
import PLP from "./components/PLP/PLP";
import collections from "@/data/data.json";
import HomeProducts from "./components/HomeProducts/HomeProducts";

interface picksproducts {
  id: number;
  name: string;
  price: string;
}

interface newsummer {
  id: number;
  name: string;
  price: string;
}

interface Data {
  picksproducts: picksproducts[];
  newsummer: newsummer[];
}

const page = () => {
  const data: Data = collections;
  const picksproducts = data.picksproducts;
  const newsummer = data.newsummer;

  return (
    <div>
      <div>
        <Image
          src="https://static.lefties.com/9/static2/itxwebstandard/images/grid/header/ocean/banner_en.jpg?v=20220630023204191361529"
          alt="Banner"
          width={900}
          height={900}
          className="banner-img"
        />
      </div>
      <div className="collection-seccion">
        <div>
          <Image
            src="https://static.lefties.com/9/photos2/2022/I/0/1/p/1703/306/800/09/1703306800_5_1_1.jpg?t=1656410932473"
            alt="banner"
            width={900}
            height={900}
            className="banner-img-2"
          />
        </div>
        <div className="picks-products-wrapper">
          <p className="text-picks-p">The new summer 2023 collection is here</p>
          <div className="picks-products">
            {picksproducts.map((item) => (
              <HomeProducts items={item}></HomeProducts>
            ))}
          </div>
        </div>
      </div>
      <div className="collection-seccion">
        <div className="collection-seccion-wrapper">
          <p className="text-new-summer-p">Our picks for you</p>
          <div className="new-summer">
            {newsummer.map((item) => (
              <HomeProducts items={item}></HomeProducts>
            ))}
          </div>
        </div>
        <div>
          <Image
            src="https://static.lefties.com/9/photos2/2022/I/0/1/p/1703/306/402/01/1703306402_6_1_1.jpg?t=1656410931629"
            alt="banner"
            width={450}
            height={550}
            className="banner-img-3"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
