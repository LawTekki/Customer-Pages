import React from "react";
import { ProductCard } from "./ProductCard";

const products = [
  {
    type: "PDF",
    title: "How to win a case",
    categories: "Business Law | Creative Law | Huma....",
    price: "$50",
    stock: "(32 copies left)",
    imageSrc: "/Frame 1000008455 (1).jpg"
  },
  ...Array(8).fill({
    type: "PDF",
    title: "How to win a case",
    categories: "Business Law | Creative Law | Huma....",
    price: "$50",
    stock: "(32 copies left)"
  })
];

interface ProductGridProps {
  viewMode?: "grid" | "list";
}

export const ProductGrid: React.FC<ProductGridProps> = ({ viewMode = "grid" }) => {
  return (
    <div className="w-full font-medium mt-12 max-md:mt-10">
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} viewMode={viewMode} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4 w-full">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} viewMode={viewMode} />
          ))}
        </div>
      )}
    </div>
  );
}; 