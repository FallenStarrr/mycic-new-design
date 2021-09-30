export default async function save_mat(e) {
  let form = new FormData(e.target)
  const opt = {
    method: "POST",
    headers: {'Content-Type': 'multipart/form-data  '},
    body: form
  };
  const res = fetch("http://127.0.0.1:8000/api/material", opt);

  return res;
}
