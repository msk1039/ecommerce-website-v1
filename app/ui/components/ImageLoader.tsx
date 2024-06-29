// import React, { Suspense } from 'react';
// import CardSkeleton from './CardSkeleton';
import Image from 'next/image';

export default async function ImageLoader ({ src, alt }: { src: string, alt: string }){

    await new Promise((resolve) => {
        setTimeout(resolve, 500);
    })


  return (
      <Image src={src} alt={alt} className="mx-auto h-full w-full " loading="lazy" height={512} width={512} />
 
  );
};