const axios = require("axios").default;

export default async function save_mat(e) {
  try {
    let form = new FormData(e.target);
    const opt = {
      headers: { "Content-Type": "multipart/form-data  " },
      data: form,
    };
    const res = await axios("http://127.0.0.1:8000/api/material", opt);
    console.log(res)
  } catch (err) {
    console.log(err.toJSON());
  }
}
