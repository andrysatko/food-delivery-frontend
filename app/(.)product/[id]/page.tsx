"use client";

import { addOrder } from "@/app/GlobalRedux/Features/Counter/counterSlice";
import { RootState } from "@/app/GlobalRedux/store";
import ProductImage from "@/components/ProductImage";
import { Dialog } from "@headlessui/react";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"

function Modal() {
  let [isOpen, setIsOpen] = useState(true);
  const id = useParams().id;
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const Products = useSelector((state: RootState) => state.orders.value)
  const findProductCount = () => Products.map(item => { if(item.product.id == product?.id){return item.amount}})

  const dispatch = useDispatch()
  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      const res = await fetch(`https://backend-shop-delivery.onrender.com/api/singleProduct?id=${id}`);
      const product = await res.json();

      setProduct(product);

      setLoading(false);
    }

    fetchProduct();
  }, [id]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
        router.back();
      }}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto max-w-3xl rounded bg-white p-10">
            {loading ? (
              <div className="h-8 w-8 rounded-full border-2 border-dotted border-red-500 animate-spin" />
            ) : (
              <div className="flex gap-x-8 h-96">
                {product?.img && (
                  <div className="relative w-72 h-full hidden md:inline">
                      <ProductImage product={product} fill />
                    </div>
                )}
                <div className="flex-1 flex flex-col">
                  <div className="flex-1">
                    <h4 className="font-semibold">{product?.ProductName}</h4>
                    <p className="font-medium text-sm text-yellow-500">{product?.price}</p>

                   

                    <p className="line-clamp-5 text-sm">
                      {product?.description}
                    </p>
                  </div>

                  <div className="space-y-3 text-sm">
                      <button className="button w-full  border-zinc-200 hover:bg-red-500 hover:text-yellow-300 hover:border-transparent"
                        onClick={() => { dispatch(addOrder(product))}}
                      >
                        Add to cart
                       
                    </button>
                    <button
                      onClick={() => window.location.reload()}
                      className="button w-full bg-transparent border-zinc-200 hover:bg-red-500 hover:text-yellow-300 hover:border-transparent"
                    >
                        View full details 
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}

export default Modal;
