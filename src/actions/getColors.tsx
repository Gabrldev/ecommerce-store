import { Color } from "@/types";

const URL_BASE = `${process.env.NEXT_PUBLIC_API_URL}/colors`;


const getColor = async (): Promise<Color[]> => {
  const response = await fetch(URL_BASE);

  return response.json();
};

export default getColor;
