const axios = require("axios").default;

export default async function change_answers(e) {
  let data = new FormData(e.target);
  const opt = {
    data,
    headers: { "Content-Type": "multipart/form-data" },
  };
  const res = await axios("http://127.0.0.1:8000/api/quiz/1", opt);

  console.log(res);
}
