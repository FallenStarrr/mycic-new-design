let axios = require("axios");

export default async function save_ann(e) {
  e.preventDefault();
  e.stopPropagation();

  let data = new FormData(e.target);

  try {
    let res = await axios.post("http://127.0.0.1:8000/api/announcement", {
      data,
    });

    console.log(res);
  } catch (err) {
    console.log(err.toJSON());
  }
}
