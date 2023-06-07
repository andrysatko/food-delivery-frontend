import Product from "@/components/Product";
import SearchInput from "@/components/SearchInput";


export default async function Home() {
  const res = await fetch("https://backend-shop-delivery.onrender.com/api/allProducts" ,  { cache: 'no-store' });
  const products: Product[] = await res.json();
  
  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-48">
      <section className="flex flex-col space-y-12 pb-44">
         <SearchInput/>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
