import React from "react";

const Report = () => {
  return (
    <div class="container">
      <h2 class="text-align-center">Отчеты</h2>

      <div class="col  left-check">
        <h3>Создать отчет по:</h3>
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customCheck01"
          />
          <label class="custom-control-label" for="customCheck01">
            По всем тестированиям
          </label>
        </div>
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customCheck-02"
          />
          <label class="custom-control-label" for="customCheck-02">
            По результатам тестирования
          </label>
        </div>
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customCheck03"
          />
          <label class="custom-control-label" for="customCheck03">
            Заявки на обучение
          </label>
        </div>
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customCheck04"
          />

          <label class="custom-control-label" for="customCheck04">
            Анкеты обратной связи
          </label>
        </div>

        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customCheck05"
          />
          <label class="custom-control-label" for="customCheck05">
            По загрузкам
          </label>
        </div>

        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customCheck06"
          />
          <label class="custom-control-label " for="customCheck06">
            Популярные учебные материалы
          </label>
        </div>

        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customCheck07"
          />
          <label class="custom-control-label " for="customCheck07">
            Популярные учебные материалы
          </label>
        </div>

        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customCheck08"
          />
          <label class="custom-control-label " for="customCheck08">
            Популярные учебные материалы
          </label>
        </div>
      </div>

      <hr />

      <table class="table table-dark mt-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Департамент</th>
            <th scope="col">ФИО</th>
            <th scope="col">Текст</th>
            <th scope="col">дата</th>
            <th scope="col">результат</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Report;
