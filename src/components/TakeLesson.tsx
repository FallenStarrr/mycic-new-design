import React from "react";

const TakeLesson = () => {
  return (
    <div className='container'>
      <h2 className='text-align-center'>Назначить обучение</h2>
      <div className='custom-control custom-checkbox'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customCheck11'
        />
        <label className='custom-control-label' htmlFor='customCheck11'>
          Департамент/филиал
        </label>
      </div>

      <div className='custom-control custom-checkbox'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customCheck22'
        />
        <label className='custom-control-label' htmlFor='customCheck22'>
          Список сотрудников
        </label>
      </div>

      <div className='custom-control custom-checkbox'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customCheck33'
        />
        <label className='custom-control-label' htmlFor='customCheck33'>
          Выбор даты
        </label>
      </div>

      <div className='custom-control custom-checkbox'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customCheck44'
        />

        <label className='custom-control-label' htmlFor='customCheck44'>
          Выбор материала
        </label>
      </div>
      <input
        type='date'
        className='form-control'
        required
        pattern='[0-9]{4}-[0-9]{2}-[0-9]{2}'
      />
      <hr />
      <table className='table table-dark'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Филиал/Департамент</th>
            <th scope='col'>Кому назначить (ФИО сотрудника)</th>
            <th scope='col'>Программа или материал обучения</th>
            <th scope='col'>Сроки до окончания</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Programmers</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Devops</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Managers</td>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr v-htmlFor='user in users'>
            <td>
              <div className='custom-control custom-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input '
                  id='customCheck1'
                />
                <label className='custom-control-label' htmlFor='customCheck1'>
                  Выбрать заявку
                </label>
              </div>
            </td>
          </tr>
        </tbody>
        <button type='submit' className='btn btn-primary'>
          Назначить
        </button>
      </table>
    </div>
  );
};

export default TakeLesson;
