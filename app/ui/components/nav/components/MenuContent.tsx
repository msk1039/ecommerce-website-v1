import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import SearchBar from "./SearchBar";
import Logo from "../../Logo";
import Link from "next/link";
import * as SheetPrimitive from "@radix-ui/react-dialog";

export default function MenuContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sheet>
        <SheetTrigger>{children}</SheetTrigger>
        <SheetContent side={"top"}>
          <SheetHeader>
            <Logo />
            <div className="mt-2">
              <SearchBar />
            </div>
            {/* <SheetTitle>product</SheetTitle> */}
            <SheetDescription>
              <Link href="/">
                <SheetPrimitive.Close>
                  <span>All Products</span>
                </SheetPrimitive.Close>
              </Link>
            </SheetDescription>
            <SheetDescription>
              <Link href="/Accessories">
                <SheetPrimitive.Close>
                  <span>Accessories</span>
                </SheetPrimitive.Close>
              </Link>
            </SheetDescription>
            <SheetDescription>
              <Link href="/Clothing">
                <SheetPrimitive.Close>
                  <span>Clothing</span>
                </SheetPrimitive.Close>
              </Link>
            </SheetDescription>
            {/* <SheetPrimitive.Close>
              <span>Close</span>
            </SheetPrimitive.Close> */}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
