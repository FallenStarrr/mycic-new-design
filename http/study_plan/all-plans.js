export default async function all_plans() {
  const res = fetch("http://127.0.0.1:8000/api/training_program");

  return res;
}
