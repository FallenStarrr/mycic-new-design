export default async function handleSubmit(e) {
  let inp = document.querySelectorAll(".quiz input");

  e.preventDefault();
  const data = new FormData(e.target);

  const opts = {
    method: "POST",
    body: data,
    headers: { 'Content-Type': 'multipart/form-data' }
  };

  // console.log(inp)

  for (let el of inp) {
    if (el.value === "") {
      alert("Заполните форму");
      break;
    }

    el.value = "";
    console.log(el.value);
  }

  let res = await fetch("http://127.0.0.1:8000/api/save/for_kias", opts);

  // console.log(res)
}
