// "use client"

import { Suspense } from "react";
import { TbCurrencyRupee } from "react-icons/tb";
// import { useEffect, useState } from 'react';
import ImageLoader from "./ImageLoader";
import CardSkeleton from "./CardSkeleton";
import ProductView from "./productview/ProductView";

type ProductCardProps = {
  product: {
    title: string;
    description: string;
    price: number;
    imgUrl: string;
  };
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setImageLoaded(true);
  //   }, 2000);

  //   // Cleanup function to clear the timeout if the component unmounts before the timeout finishes
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>

    <ProductView product={product}>

      <li>

      <div className="product-card  p-4 rounded-lg border border-slate-300 hover:border-slate-400">
        <div className="product-card__imagie px-auto">
          <Suspense fallback={<CardSkeleton />}>
            <ImageLoader src={product.imgUrl} alt="Product image" />
          </Suspense>
        </div>
        <div className="product-card__content flex pt-4 w-full">
          <div className="float-start block ">
            <h2 className="font-medium text-left">{product.title}</h2>
            <p className="font-light text-slate-500 text-left">{product.description}</p>
          </div>
          <p className="float-end ml-auto flex">
            <TbCurrencyRupee className="mt-1 " /> {product.price}
          </p>
        </div>
      </div>

      </li>


    </ProductView>
    </>
  );
};

export default ProductCard;
