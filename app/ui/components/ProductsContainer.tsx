import ProductCard from "./ProductCard"


export default function ProductContainer(){

    const products = [
        {
            title: "Product 1",
            description: "Product description",
            price: 10.00,
            imgUrl: "https://placehold.jp/288x288.png"
        },
        {
            title: "Product 2",
            description: "Product description",
            price: 20.00,
            imgUrl: "https://placehold.jp/288x288.png"
        },
        {
            title: "Product 3",
            description: "Product description",
            price: 30.00,
            imgUrl: "https://placehold.jp/288x288.png"
        },
        {
            title: "Product 4",
            description: "Product description",
            price: 40.00,
            imgUrl: "https://placehold.jp/288x288.png"
        },
        {
            title: "Product 5",
            description: "Product description",
            price: 50.00,
            imgUrl: "https://placehold.jp/288x288.png"
        },
        {
            title: "Product 6",
            description: "Product description",
            price: 60.00,
            imgUrl: "https://placehold.jp/288x288.png"
        },
        {
            title: "Product 7",
            description: "Product description",
            price: 70.00,
            imgUrl: "https://placehold.jp/288x288.png"
        },
        {
            title: "Product 8",
            description: "Product description",
            price: 80.00,
            imgUrl: "https://placehold.jp/288x288.png"
        },
        {
            title: "Product 9",
            description: "Product description",
            price: 90.00,
            imgUrl: "https://placehold.jp/288x288.png"
        },
        {
            title: "Product 10",
            description: "Product description",
            price: 100.00,
            imgUrl: "https://placehold.jp/288x288.png"
        }
    ]


    
    return <>

    <div className="flex gap-4 flex-wrap mx-auto">
        {products.map((product, index) => {

            return <ProductCard key={index} product={product} />
        })}



    </div>

    
    
    </>
}