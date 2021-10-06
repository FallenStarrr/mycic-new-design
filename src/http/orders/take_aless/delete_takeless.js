let axios = require("axios");

export default async function delete_takeless(e) {
  try {
    const res = await axios.delete("http://127.0.0.1:8000/api/undergo/3");
    console.log(res)
  } catch (err) {
    console.log(err.toJSON());
  }
}
