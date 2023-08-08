import axios from "axios";
export async function getNews() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/news`);
  const data = res.data.results;
  return data;
}
