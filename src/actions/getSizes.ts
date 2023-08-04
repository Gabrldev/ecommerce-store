import { Size } from "@/types";

const URL_BASE = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;


const getSizes = async (): Promise<Size[]> => {
  const response = await fetch(URL_BASE);

  return response.json();
};

export default getSizes;
