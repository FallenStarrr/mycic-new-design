import axios from "axios";

export default async function study_assi(e) {
  try {
    let data = new FormData(e.target);
    const opt = {
      data,
      headers: { "Content-Type": "multipart/form-data" },
    };
    const res = await axios.post(
      "http://127.0.0.1:8000/api/assign/training",
      opt
    );
    console.log(res);
  } catch (err) {
    console.log(err.toJSON());
  }
}
