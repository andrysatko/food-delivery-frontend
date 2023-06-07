"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  product: Product;
  fill?: boolean;
};

function ProductImage({ product, fill }: Props) {
  const [loading, setLoading] = useState(true);
  const link = "https://backend-shop-delivery.onrender.com/api/file/"
  return (
    <>
      {fill ? (
        <Image
          src={link +product.img}
          alt={product.ProductName}
          fill
          className={`object-contain duration-500 ease-in-out group-hover:opacity-75 ${
            loading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }}`}
          onLoadingComplete={() => setLoading(false)}
        />
      ) : (
        <Image
          src={link+ product.img}
          alt={product.ProductName}
          width={400}
          height={1000}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }}`}
          onLoadingComplete={() => setLoading(false)}
        />
      )}
    </>
  );
}

export default ProductImage;
