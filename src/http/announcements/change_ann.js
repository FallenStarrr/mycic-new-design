const axios = require("axios").default;

export default async function change_ann(e) {
  let data = new FormData(e.target);
  try {
    const res = await axios.post("http://127.0.0.1:8000/api/announcement/3", {
      data,
    });
    console.log(res);
  } catch (err) {
    console.log(err.toJSON());
  }
}
