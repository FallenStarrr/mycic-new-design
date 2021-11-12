import React from "react";

const WannaLearn = () => {
  return (
    <div className='container'>
      <h2 className='text-align-center'> Хочу провести обучение</h2>
      <div className='d-flex justify-content-end align-items-end mt-5'>
        <button type='submit' className='btn btn-primary bg-primary'>
          Назначить
        </button>
      </div>

      <form className='quiz' noValidate>
        <label htmlFor='quiz_id'>Quiz id</label>
        <input required type='text' name='quiz_id' id='quiz_id' />

        <label htmlFor='user_id'>User id</label>
        <input required type='text' name='user_id' id='user_id' />

        <label htmlFor='count_question'></label>
        <input required type='text' name='count_question' id='count_question' />

        <label htmlFor='day'>Day</label>
        <input required type='text' name='day' id='day' />

        <label htmlFor='try'>Try</label>
        <input required type='text' name='try' id='try' />

        <button type='submit'>Send data</button>
      </form>

      <div className='d-flex '>
        <div className='order-0'>
          {" "}
          <h2 className='mt-1'>Фильтр: период...</h2>{" "}
        </div>
        <div className='order-1'>
          {" "}
          <input
            type='checkbox'
            className='form-check-input'
            id='exampleCheck33'
          />
        </div>
      </div>

      <form action='' method='post'>
        <div>
          <label>
            Данные отправителя
            <input
              v-model='name'
              type='text'
              className='form-control'
              id='exampleFormControlInput1'
              placeholder='Имя'
            />
          </label>
        </div>
        <div>
          <label>
            Тема{" "}
            <input
              v-model='topic'
              type='text'
              className='form-control'
              id='exampleFormControlInput2'
              placeholder='name@example.com'
            />
          </label>
        </div>
        <div>
          <label>
            Дата
            <input
              v-model='date'
              type='date'
              className='form-control'
              id='exampleFormControlInput3'
              placeholder='day month year'
            />
          </label>
        </div>
        <div>
          <label>
            Обратная связь (заполняется вручную){" "}
            <textarea
              v-model='description'
              className='form-control '
              id='exampleFormControlTextarea1'
              rows={3}
            ></textarea>
          </label>
        </div>
      </form>

      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Данные отправителя </th>
            <th scope='col'>Тема</th>
            <th scope='col'>Дата </th>
            <th scope='col'>Обратная связь (заполняется вручную) </th>
            <th scope='col'>Описание целевая аудитория</th>
          </tr>
        </thead>

        <tbody>
          <tr></tr>

          <tr>
            <th scope='row'>1</th>
            <td>Mark Otto</td>
            <td>Sales</td>
            <td>20.01.21</td>
            <td>It Was AWESOME!</td>
            <td>Managers</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Jacob Thornton</td>
            <td>Introduction To Artificial Intelligence And Game Dev</td>
            <td>21.21.21</td>
            <td>Wow this course is so breathtaking!</td>
            <td>Programmers</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Larry the Bird</td>
            <td>Writer Course In The Fantasy World</td>
            <td>20.02.21</td>
            <td>
              I wrote a lot of nice books and learned most of these valuable
              skills! Thx a million!
            </td>
            <td>Writers</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WannaLearn;
