import React from 'react';

type Props = {
  setProduct: any;
};
 function SearchInput  ({setProduct}:any)  {
    // const [searchTerm, setSearchTerm] = useState('')

//   useEffect(() => {
//     const delayDebounceFn = setTimeout(async () => {
//         console.log(searchTerm)
//         const res = await fetch(`https://backend-shop-delivery.onrender.com/api/productLike?substring=${searchTerm}`)
//     //    setProduct(await res.json())
//     }, 3000)

//     return () => clearTimeout(delayDebounceFn)
//   }, [searchTerm])
  return  (
    <div className="self-center">
      <input
        type="text"
        className="py-2 px-4 rounded-l-lg bg-gray-100 text-gray-800 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 w-80"
              placeholder="Search..."
                
      />
    </div>
  );
};

export default SearchInput;
