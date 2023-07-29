import { Product } from "@/types";

const URL_BASE = `${process.env.NEXT_PUBLIC_API_URL}/products`;


const getProduct = async (id:string): Promise<Product> => {
  const response = await fetch(`${URL_BASE}/${id}`);

  return response.json();
};

export default getProduct;
