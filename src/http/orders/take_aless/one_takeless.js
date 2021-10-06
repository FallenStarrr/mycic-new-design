import axios from "axios";

export default async function one_takeless() {
  try {
    const res = await axios("http://127.0.0.1:8000/api/undergo/3");
    console.log(res);
  } catch (err) {
    console.log(err.toJSON());
  }
}
