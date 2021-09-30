export default async function all_mat() {
  const res = fetch("http://127.0.0.1:8000/api/material");

  return res;
}
