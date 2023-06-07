'use client';
import React, { useEffect, useState } from 'react';
import type { RootState } from '../GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { addOrder , removeOne  } from '../GlobalRedux/Features//Counter/counterSlice'
import Product from '@/components/Product';
import ProductImage from '@/components/ProductImage';

function Page() {

    const Products = useSelector((state: RootState) => state.orders.value)
    const dispatch = useDispatch();
    const [empty , setEmpty] = useState(false)
    useEffect(() => {
        if (Products.length == 0) {
            setEmpty(true)
        }
    }, [Products])
    return (
        empty? <div className='w-1/2 absolute top-1/4 left-1/4 right-1/4 text-center text-3xl font-medium' >Your cart is empty </div>:
        <div className='mt-24 flex flex-col'>
                {Products.map(element =>
                <div className='flex flex-row content-between' key={element.product.id}>
                    <div className="max-w-md max-h-72 flex-1 ">  
                        <ProductImage product={element.product} fill={false} />
                    </div>
                        <div className="font-semibold flex flex-col  justify-center  mt-4 mb-1">
                        <p className="text-5xl ">{element.product.ProductName}</p>
                        <p className="text-yellow-500 ">ціна одного {element.product.price}</p>
                            <div>кілкість : {element.amount} , ціна : {(element.amount * parseFloat(element.product.price)).toFixed(2)}$</div>
                            <section className= 'w-24 flex flex-row justify-between'>
                                <button className='bg-yellow-500 text-red text-white hover:bg-red-500 hover:text-yellow-50 font-bold py-2 px-4 rounded-md' onClick={()=>dispatch(addOrder(element.product))}>+</button>
                                <button className='bg-yellow-500 text-red text-white hover:bg-red-500 hover:text-yellow-50 font-bold py-2 px-4 rounded-md' onClick={()=>dispatch(removeOne(element.product))}>-</button>  
                            </section>
                        </div>
                </div>
                    )}
        </div>
      
    );
}

export default Page;