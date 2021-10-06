const axios = require('axios').default

export default async function study_assi() {
  axios("http://127.0.0.1:8000/api/assign/training")
  .then(res =>  console.log(res))
  .catch(err => console.log(err.toJSON()))


}


  
