"use client";
import React from "react";
import "./NavigationBar.scss";
import Image from "next/image";
import Link from "next/link";
import accesories from "@/app/assets/NavigationBar/accesories.jpg";
import bikini from "@/app/assets/NavigationBar/bikini.jpg";
import swimsuit from "@/app/assets/NavigationBar/swimsuit.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

const NavigationBar = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div>
      <nav>
        <div className="nav-text">
          <Link href="/" className="brand">
            Sunshine
          </Link>
          {pathname === "/accesories" ? (
            <p>Accesories</p>
          ) : pathname === "/swimsuits" ? (
            <p>Swimsuits</p>
          ) : pathname === "/bikinies" ? (
            <p>Bikinies</p>
          ) : (
            <p></p>
          )}
        </div>
        <div className="nav-sections">
          <div className="nav-items">
            <Link href="/swimsuits">
              <Image src={swimsuit} alt="Logo" width={200} height={100} />
            </Link>
            <p>Swimsuit</p>
          </div>
          <div className="nav-items">
            <Link href="/accesories">
              <Image src={accesories} alt="Logo" width={200} height={100} />
            </Link>
            <p>Accesories</p>
          </div>
          <div className="nav-items">
            <Link href="/bikinies">
              <Image src={bikini} alt="Logo" width={200} height={100} />
            </Link>
            <p>Bikini</p>
          </div>
        </div>
        <div className="nav-icons">
          <span>
            <FontAwesomeIcon icon={faRightToBracket} className="icon-login" />
            <Link href="/login" className="login">Log in</Link>
          </span>
          <span>
            <FontAwesomeIcon icon={faCartShopping} className="icon-cart" />
            <p>Cart</p>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
