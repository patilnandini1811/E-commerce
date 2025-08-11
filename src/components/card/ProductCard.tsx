
import { useState } from 'react';
import './ProductCard.css';

type Variant= {
  id: number;
  label: string;
  inStock: boolean;
};

type Product={
    id: number;
    name: string;
    price: number;
    image: string;
    variants: Variant[];
};

interface Props {
    product: Product;
  }

function ProductCard({product}: Props) {
     
  const [selectedVariant, setSelectedVariant] = useState<Variant>(product.variants[0]);

  const isOutOfStock = !selectedVariant.inStock;

  return (
    
    <div className='productCards'>
       
        <img src={product.image} alt={product.name} className='productImage' />
        <h2 className='productName'>{product.name}</h2>
        <p className='productPrice'>${product.price.toFixed(2)}</p>
        {product.variants.length > 1 ? (
         <select
         className="variantSelector"
         value={selectedVariant.id}
         onChange={(e) => {
           const v = product.variants.find(v => v.id === Number(e.target.value));
           if (v) setSelectedVariant(v);
         }}
       >
         {product.variants.map(variant => (
           <option key={variant.id} value={variant.id} disabled={!variant.inStock}>
             {variant.label} {variant.inStock ? '' : '(Out of Stock)'}
           </option>
         ))}
       </select>
       
        ) : (<span>{product.variants[0].label}</span>

        )}
       
        <button 
        className='addToCartButton'
        disabled={isOutOfStock}
      >
        {isOutOfStock ? "Out of Stock" : "Add to Cart"}
      </button>
    </div>
  )
}

export default ProductCard