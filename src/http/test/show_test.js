const axios = require('axios').default


export default async function show_test(e) {

  const res = await axios("http://127.0.0.1:8000/api/quiz/1")

  console.log(res)
}
