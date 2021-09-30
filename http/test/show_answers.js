export default async function show_answers() {
  const opt = {
    method: "GET",
  };
  const res = fetch("http://127.0.0.1:8000/question/1", opt);

  return res;
}
