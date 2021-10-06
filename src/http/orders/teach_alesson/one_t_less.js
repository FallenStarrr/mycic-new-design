const axios = require("axios").default;

export default async function all_mat() {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/undergo/3");
    console.log(res);
  } catch (err) {
    console.log(err.toJSON());
  }
}
