export default async function delete_takeless(e) {
  const res = fetch("http://127.0.0.1:8000/api/undergo/3", {
    method: "DELETE",

  });

  return res;
}
