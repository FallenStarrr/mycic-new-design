import React from "react";

const Report = () => {
  return (
    <div className='container'>
      <h2 className='text-align-center'> Отчеты </h2>
      <div className='col  left-check'>
        <h3> Создать отчет по: </h3>{" "}
        <div className='custom-control custom-checkbox'>
          <input
            type='checkbox'
            className='custom-control-input'
            id='customCheck01'
          />
          <label className='custom-control-label' htmlFor='customCheck01'>
            По всем тестированиям{" "}
          </label>{" "}
        </div>{" "}
        <div className='custom-control custom-checkbox'>
          <input
            type='checkbox'
            className='custom-control-input'
            id='customCheck-02'
          />
          <label className='custom-control-label' htmlFor='customCheck-02'>
            По результатам тестирования{" "}
          </label>{" "}
        </div>{" "}
        <div className='custom-control custom-checkbox'>
          <input
            type='checkbox'
            className='custom-control-input'
            id='customCheck03'
          />
          <label className='custom-control-label' htmlFor='customCheck03'>
            Заявки на обучение{" "}
          </label>{" "}
        </div>{" "}
        <div className='custom-control custom-checkbox'>
          <input
            type='checkbox'
            className='custom-control-input'
            id='customCheck04'
          />
          <label className='custom-control-label' htmlFor='customCheck04'>
            Анкеты обратной связи{" "}
          </label>{" "}
        </div>
        <div className='custom-control custom-checkbox'>
          <input
            type='checkbox'
            className='custom-control-input'
            id='customCheck05'
          />
          <label className='custom-control-label' htmlFor='customCheck05'>
            По загрузкам{" "}
          </label>{" "}
        </div>
        <div className='custom-control custom-checkbox'>
          <input
            type='checkbox'
            className='custom-control-input'
            id='customCheck06'
          />
          <label className='custom-control-label ' htmlFor='customCheck06'>
            Популярные учебные материалы{" "}
          </label>{" "}
        </div>
        <div className='custom-control custom-checkbox'>
          <input
            type='checkbox'
            className='custom-control-input'
            id='customCheck07'
          />
          <label className='custom-control-label ' htmlFor='customCheck07'>
            Популярные учебные материалы{" "}
          </label>{" "}
        </div>
        <div className='custom-control custom-checkbox'>
          <input
            type='checkbox'
            className='custom-control-input'
            id='customCheck08'
          />
          <label className='custom-control-label ' htmlFor='customCheck08'>
            Популярные учебные материалы{" "}
          </label>{" "}
        </div>{" "}
      </div>
      <hr />
      <table className='table table-dark mt-3'>
        <thead>
          <tr>
            <th scope='col'> # </th> <th scope='col'> Департамент </th>{" "}
            <th scope='col'> ФИО </th> <th scope='col'> Текст </th>{" "}
            <th scope='col'> дата </th> <th scope='col'> результат </th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          <tr>
            <th scope='row'> 1 </th> <td> Mark </td> <td> Otto </td>{" "}
            <td> @mdo </td>{" "}
          </tr>{" "}
          <tr>
            <th scope='row'> 2 </th> <td> Jacob </td> <td> Thornton </td>{" "}
            <td> @fat </td>{" "}
          </tr>{" "}
          <tr>
            <th scope='row'> 3 </th> <td> Larry </td> <td> the Bird </td>{" "}
            <td> @twitter </td>{" "}
          </tr>{" "}
        </tbody>{" "}
      </table>{" "}
    </div>
  );
};

export default Report;
