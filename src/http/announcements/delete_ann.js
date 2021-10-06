import { resolveOnChange } from "antd/lib/input/Input";

const axios = require("axios").default;

export default async function delete_ann(e) {
  try {
    const res = await axios({
      method: "delete",
      url: "http://127.0.0.1:8000/api/announcement/3",
    });
    console.log(res);
  } catch (err) {
    console.log(err.toJSON());
  }
}
