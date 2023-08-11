import axios from "axios";
export async function getNews() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/news`);
  const data = res.data.results;
  return data;
}
export async function getCategories() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/categories`);
  const data = res.data.results;
  return data;
}
// export async function getPartners() {
//   const res = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/partners`);
//   const data = res.data.results;
//   return data;
// }
export async function getPartners() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/partners`);

  const data = await res.data;

  return data;
}

// export async function getSinglePost(slug: any) {
//   const res = await axios.get(
//     `${process.env.NEXT_PUBLIC_ENDPOINT}/posts/${slug}`
//   );
//   const data = await res.data;
//   return data;
// }
