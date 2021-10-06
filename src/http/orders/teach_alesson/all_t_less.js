const axios = require("axios").default;

export default async function all_less() {
  try {
    const res = await axios("http://127.0.0.1:8000/api/undergo");

    console.log(res);
  } catch (error) {
    console.error(error.toJSON());
  }
}
