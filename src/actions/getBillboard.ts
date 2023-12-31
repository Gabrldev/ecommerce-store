import { Billboard } from "@/types";

const URL_BASE = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;


const getBillboard = async (id:string): Promise<Billboard> => {
  const response = await fetch(`${URL_BASE}/${id}`);

  return response.json();
};

export default getBillboard;
