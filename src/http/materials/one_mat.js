const axios = require("axios").default;

export default async function all_mat() {
  try {
    const res = await axios("http://127.0.0.1:8000/api/material/1");
    console.log(res);
  } catch (err) {
    console.log(err.toJSON());
  }
}
