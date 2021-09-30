export default async function show_test(e) {
  const opt = {
    method: "GET",
  };
  const res = fetch("http://127.0.0.1:8000/api/quiz/1", opt);

  return res;
}
