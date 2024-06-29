
import { FaCartArrowDown } from "react-icons/fa6";

import { Button } from "@/components/ui/button"

export function ButtonWithIcon({ product}: { product: any}) {
  return (
    <Button>
      <FaCartArrowDown className="mr-2 h-4 w-4" /> Add to Cart
    </Button>
  )
}
