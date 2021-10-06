import axios from "axios";

export default async function save_plan_text(e) {
  try {
    let data = new FormData(e.target);
    const opt = {
      data,
      headers: { "Content-Type": "multipart/form-data" },
    };
    const res = await axios.post(
      "http://127.0.0.1:8000/api/training_program",
      opt
    );
    console.log(res)
  } catch (err) {
    console.log(err.toJSON());
  }
}
