"use server";

import { revalidatePath } from "next/cache";

const addForm = (formData) => {
  const name = formData.get("username");
  console.log(name);
};

export default addForm;

export const showData = async (name) => {
  try {
    const response = await fetch("http://localhost:3001/products");

    const data = await response.json();

    const filteredData = data.reduce((filtered, product) => {
      if (new RegExp(name, "i").test(product.origin)) {
        filtered.push(...product.items);
      }
      return filtered;
    }, []);

    // revalidatePath('/');
    console.log(filteredData);
    return filteredData;
  } catch (e) {
    console.log(new Error(e));
  }
};

export const fetchIexData = async()=>{

    try {
        const response = await fetch(`https://api.iex.cloud/v1/data/core/quote/aapl?token=${process.env.PUBLISHABLE_TOKEN_IEX}`)
        const actualData = await response.json();
        console.log(actualData[0].companyName);
        return actualData;
    }catch(e){
        throw new Error(e)
    }
} 

export const getAllTeams = async () =>{

  try {
    const response = await fetch (`https://api.sportmonks.com/v3/football/teams?api_token=${process.env.FOOTBALL_API}`)
    const data = await response.json();
    console.log(data.data[0]);
    return data;
  } catch(e){
    throw new error(e)
  }

}
