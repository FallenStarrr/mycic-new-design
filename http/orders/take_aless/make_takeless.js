export default async function make_takeless(e) {
  let data = new FormData(e.target)
  const opt = {
    method: 'POST',
    body: data,
    headers: { 'Content-Type': 'multipart/form-data' }
  }
  const res = fetch('http://127.0.0.1:8000/api/undergo', opt )

  return res
}