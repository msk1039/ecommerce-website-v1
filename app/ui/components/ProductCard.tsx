

type ProductCardProps = {
    product: {
      title: string;
      description: string;
      price: number;
      imgUrl: string;
    };
}



const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  return (
    <>
      <div className="product-card w-[320px] p-4 rounded-lg border border-slate-300 hover:border-slate-400">
        <div className="product-card__imagie px-auto">
          <img src={`${product.imgUrl}`} alt="Product image" className="mx-auto"/>
        </div>
        <div className="product-card__content flex pt-1 w-full">
          <div className="float-start block">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
          <p className="float-end ml-auto">{product.price}</p>
        </div>
      </div>
    </>
  );
}



export default ProductCard;