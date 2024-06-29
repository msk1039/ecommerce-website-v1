// "use client";

// import Image from "next/image";
import "./globals.css";
import { AllData } from "./data";

import ProductContainer from "./ui/components/ProductsContainer";


export default function Home() {
  return (
    <>
    <div className="flex min-h-[calc(100dvh-64px)] flex-col">
    <main className="flex-1">
      <ProductContainer products={AllData}/>
    </main>
    </div>
    </>

  );
}
