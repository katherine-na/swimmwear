"use client";

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store'; // Ajusta la ruta según tu estructura de archivos
import { increment } from '../../redux/actions'; // Ajusta la ruta según tu estructura de archivos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>
        Add to  <FontAwesomeIcon icon={faCartShopping} className="icon-cart" />
      </button>
    </div>
  );
};

export default Counter;
