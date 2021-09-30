export default async function all_mat(e) {
  const res = fetch("http://127.0.0.1:8000/api/material/2", {
    method: "DELETE",

  });

  return res;
}
