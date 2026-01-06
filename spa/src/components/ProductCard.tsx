interface ProductCardProps {
  name: string;
  price: number;
}

export default function ProductCard({ name, price }: ProductCardProps) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="h-48 bg-base-300 flex items-center justify-center text-base-content/50">
        Product Image
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-2xl font-bold text-primary">${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
