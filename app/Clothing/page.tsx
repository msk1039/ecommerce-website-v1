import ProductContainer from "../ui/components/ProductsContainer";
import { ClothingData } from "../data";

export default function Accessories() {
  return (
    <>
     <div className="flex min-h-[calc(100dvh-64px)] flex-col">
        <main className="flex-1">
          <h1 className="ml-8 mt-4 font-medium md:hidden">
            {"home > Clothing"}
          </h1>
          <ProductContainer products={ClothingData} />
        </main>
      </div>
    </>
  );
}
