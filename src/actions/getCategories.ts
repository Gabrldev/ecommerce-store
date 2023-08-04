import { Category } from "@/types";

const URL_BASE = `${process.env.NEXT_PUBLIC_API_URL}/categories`;


const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(URL_BASE);

  return response.json();
};

export default getCategories;
