const axios = require("axios");

export default async function all_mat() {
  try {
    const res = await axios.get
    ("http://127.0.0.1:8000/api/material");
    console.log(res.data);
  } catch (error) {
    console.error(error.toJSON());
  }
}
