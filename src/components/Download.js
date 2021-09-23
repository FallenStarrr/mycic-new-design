import React from "react";

const Download = () => {
  return (
    <div>
      <div class="container">
        <h2 class="text-align-center">Загрузки</h2>

        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customCheck0"
          />
          <label class="custom-control-label" for="customCheck0">
            Учебный материал (презентация + тест , документ, вебинар)
          </label>
        </div>
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customCheck2"
          />
          <label class="custom-control-label" for="customCheck2">
            Книга
          </label>
        </div>
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customCheck3"
          />
          <label class="custom-control-label" for="customCheck3">
            {" "}
            Видео
          </label>
        </div>
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customCheck4"
          />

          <label class="custom-control-label" for="customCheck4">
            Тест
          </label>
        </div>

        <div class="custom-file ">
          <input type="file" class="custom-file-input" id="customFile" />
          <label class="custom-file-label h-100" for="customFile">
            Choose file
          </label>
        </div>
        <a href="" class="btn text-white bg-dark mt-3 ml-0 mb-1" onClick="edit">
          Редактировать
        </a>
        <input class="custom-file-input mb-2" type="file" />

        <table class="mt-4 table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Файл</th>
              <th scope="col">Материал</th>
              <th scope="col">Описание</th>
              <th scope="col">Дата загрузки</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>21.12.21</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>20.04.21</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>07.02.21</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Download;
