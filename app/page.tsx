// "use client";

// import Image from "next/image";
import "./globals.css";

import ProductContainer from "./ui/components/ProductsContainer";


export default function Home() {
  return (
    <>
    <main className="my-10 px-auto flex items-center w-full">
      <ProductContainer />


    </main>
    </>

  );
}
