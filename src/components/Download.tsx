import React from "react";

const Download = () => {
  return (
    <div>
      <div className='container'>
        <h2 className='text-align-center'>Загрузки</h2>

        <div className='custom-control custom-checkbox'>
          <input
            type='checkbox'
            className='custom-control-input'
            id='customCheck0'
          />
          <label className='custom-control-label' htmlFor='customCheck0'>
            Учебный материал (презентация + тест , документ, вебинар)
          </label>
        </div>
        <div className='custom-control custom-checkbox'>
          <input
            type='checkbox'
            className='custom-control-input'
            id='customCheck2'
          />
          <label className='custom-control-label' htmlFor='customCheck2'>
            Книга
          </label>
        </div>
        <div className='custom-control custom-checkbox'>
          <input
            type='checkbox'
            className='custom-control-input'
            id='customCheck3'
          />
          <label className='custom-control-label' htmlFor='customCheck3'>
            {" "}
            Видео
          </label>
        </div>
        <div className='custom-control custom-checkbox'>
          <input
            type='checkbox'
            className='custom-control-input'
            id='customCheck4'
          />

          <label className='custom-control-label' htmlFor='customCheck4'>
            Тест
          </label>
        </div>

        <div className='custom-file '>
          <input type='file' className='custom-file-input' id='customFile' />
          <label className='custom-file-label h-100' htmlFor='customFile'>
            Choose file
          </label>
        </div>
        <a href='' className='btn text-white bg-dark mt-3 ml-0 mb-1'>
          Редактировать
        </a>
        <input className='custom-file-input mb-2' type='file' />

        <table className='mt-4 table'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Файл</th>
              <th scope='col'>Материал</th>
              <th scope='col'>Описание</th>
              <th scope='col'>Дата загрузки</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>21.12.21</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>20.04.21</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
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
