import React from "react";

const Announcement = () => {
  return (
    <>
      <div className="container">
        <h2 className="mt-3">Анонсы обучения </h2>
        <form action="">
          <div>
            <label>Тема обучения</label>{" "}
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail132"
              aria-describedby="emailHelp"
              placeholder="Тема/"
            />
          </div>
          <div>
            <label>Cпикер</label>{" "}
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail113"
              aria-describedby="emailHelp"
              placeholder="Спикер"
            />
          </div>
          <div>
            <label>Описание</label>{" "}
            <textarea
              className="form-control"
              id="exampleFormControlTextarea22"
              rows="3"
            ></textarea>
          </div>
          <div>
            <label>Дата и время </label>{" "}
            <input
              type="date"
              className="form-control"
              id="exampleInputEmail101"
              aria-describedby="emailHelp"
              placeholder="Описание/"
            />
          </div>
          <div>
            <label>Формат обучения </label>{" "}
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail134"
              aria-describedby="emailHelp"
              placeholder="Формат"
            />
          </div>
          <div>
            <label>Место обучения очно </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail124"
              aria-describedby="emailHelp"
              placeholder="Место где очное обучение"
            />
          </div>
          <div>
            <label>Место обучения онлайн</label>{" "}
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail12"
              aria-describedby="emailHelp"
              placeholder="Место где онлайн обучение"
            />
          </div>
          <div>
            <label>Тип обучения</label>{" "}
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Тип"
            />
          </div>
        </form>

        <div className="d-flex mt-3">
          <button type="submit" className="btn btn-primary">
            Добавить
          </button>
          <button type="submit" className="btn btn-primary">
            Изменить
          </button>
        </div>
        <hr />
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Тема обучения </th>
              <th scope="col">Cпикер </th>
              <th scope="col">Описание </th>
              <th scope="col">Дата и время </th>
              <th scope="col">Формат обучения </th>
              <th scope="col">Место обучения очно </th>
              <th scope="col">Место обучения онлайн </th>
              <th scope="col">Тип обучения </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Announcement;
