let axios = require("axios");

export default async function save_plan(e) {
  try {
    let data = new FormData(e.target);
    const opt = {
      data,
      headers: { "Content-Type": "multipart/form-data" },
    };
    const res = await axios("http://127.0.0.1:8000/api/training_program", opt);
    console.log(res);
  } catch (err) {
    console.log(err.toJSON());
  }
}
