import React from "react";

const TakeLesson = () => {
  return (
    
     
        <div class="container">
          <h2 class="text-align-center">Назначить обучение</h2>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customCheck11"
            />
            <label class="custom-control-label" for="customCheck11">
              Департамент/филиал
            </label>
          </div>

          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customCheck22"
            />
            <label class="custom-control-label" for="customCheck22">
              Список сотрудников
            </label>
          </div>

          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customCheck33"
            />
            <label class="custom-control-label" for="customCheck33">
              Выбор даты
            </label>
          </div>

          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customCheck44"
            />

            <label class="custom-control-label" for="customCheck44">
              Выбор материала
            </label>
          </div>
          <input
            type="date"
            class="form-control"
            required
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
          />
          <hr />
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Филиал/Департамент</th>
                <th scope="col">Кому назначить (ФИО сотрудника)</th>
                <th scope="col">Программа или материал обучения</th>
                <th scope="col">Сроки до окончания</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Programmers</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Devops</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Managers</td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr v-for="user in users">
                <td>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input "
                      id="customCheck1"
                    />
                    <label class="custom-control-label" for="customCheck1">
                      Выбрать заявку
                    </label>
                  </div>
                </td>


              </tr>
            </tbody>
            <button type="submit" class="btn btn-primary">
              Назначить
            </button>
          </table>
        </div>
      
  
  );
};

export default TakeLesson;
