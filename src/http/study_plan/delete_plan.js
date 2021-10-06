const axios = require("axios").default;

export default async function delete_plan() {
  try {
    const res = await axios.get(
      "http://127.0.0.1:8000/api/training_program/37"
    );
    console.log(res);
  } catch (err) {
    console.log(err.toJSON());
  }
}
