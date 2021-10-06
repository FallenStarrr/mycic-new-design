const axios = require("axios");

export default async function all_mat(e) {
  try {
    const res = await axios.delete("http://127.0.0.1:8000/api/material/2");
    console.log(res)
  } catch (err) {
    console.log(err.toJSON());
  }
}
