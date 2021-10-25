const axios = require("axios").default;

export default async function all_ann() {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/announcement");
    
    console.log(res);

  } catch (error) {
    console.error(error.toJSON());
  }
}
