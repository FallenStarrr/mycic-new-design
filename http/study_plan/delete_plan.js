export default async function delete_plan() {
  const res = fetch("http://127.0.0.1:8000/api/training_program/37", {
    method: 'DELETE',

  });

  return res;
}
