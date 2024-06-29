import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ImageLoader from "../ImageLoader";
import { Suspense } from "react";
import CardSkeleton from "../CardSkeleton";
import { TbCurrencyRupee } from "react-icons/tb";
import { ButtonWithIcon } from "./AddToCart";


export default function ProductView({
  children,
  product,
}: {
  children: React.ReactNode;
  product: any;
}) {
  return (
    <>
      <Sheet>
        <SheetTrigger>{children}</SheetTrigger>
        <SheetContent className="w-full md:w-[50%]" side={"myright"}>
          <SheetHeader>
            <div className="flex items-center justify-center pt-6 md:justify-start w-full">
              <div className="h-[288px] w-[288px]">
                <Suspense fallback={<CardSkeleton />}>
                  <ImageLoader src={product.imgUrl} alt="Product image" />
                </Suspense>
              </div>
            </div>
            <div className="flex wrap w-full py-4">
              <div className="box">
                <SheetTitle>{product.title}</SheetTitle>
                <SheetDescription>{product.description}</SheetDescription>
              </div>
              <div className="ml-auto md:ml-32 flex">
              <TbCurrencyRupee className="mt-1 " /> {product.price}
              </div>
            </div>
            <ButtonWithIcon product={product}/>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
