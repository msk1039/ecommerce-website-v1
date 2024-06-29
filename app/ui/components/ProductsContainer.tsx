import ProductCard from "./ProductCard"



export default function ProductContainer({products}:{products: any[]}){

    // const fetchProducts = async () => {
    //     return 
    // }


    
    return <>
   


    <div className="mx-auto max-w-7xl p-8 pb-16">
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => {

            return <ProductCard key={index} product={product} />
        })}

        </ul>
    </div>

    </>
}