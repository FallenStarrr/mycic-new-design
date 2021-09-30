export default async function save_plan(e) {
  let data = new FormData(e.target)
  const opt = {
    method: 'POST',
    body: data,
    headers: { 'Content-Type': 'multipart/form-data' }
  }
  const res = fetch('http://127.0.0.1:8000/api/training_program', opt )

  return res
}