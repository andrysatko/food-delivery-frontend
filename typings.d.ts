type Old = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

type Product = { 
  id: string, 
  ProductName: string,
  price: string, 
  description: string,
  img: string,
  ShopId: number,
}