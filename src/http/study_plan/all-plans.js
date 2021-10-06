const axios = require("axios").default;

export default async function all_plans() {
  const res = await axios("http://127.0.0.1:8000/api/training_program")
    .then(response =>  console.log(response))
    .catch(err => console.log(err.toJSON()))
}
