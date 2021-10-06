const axios = require('axios').default

export default async function show_answers() {


  const res =  await axios("http://127.0.0.1:8000/question/1");

  console.log(res)
}
