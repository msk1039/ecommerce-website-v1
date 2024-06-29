import React, { Suspense } from 'react';
// import CardSkeleton from './CardSkeleton';
import Image from 'next/image';

export default async function ImageLoader ({ src, alt }: { src: string, alt: string }){

    await new Promise((resolve) => {

        setTimeout(resolve, 2000);


        });


  return (
      <img src={src} alt={alt} className="mx-auto h-full w-full" loading="lazy" />
 
  );
};