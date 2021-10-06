import React, { useEffect, useState } from 'react'
import all_ann from '../http/announcements/all_ann'
import change_ann from '../http/announcements/change_ann'
import save_ann from '../http/announcements/save_ann'
import delete_ann from '../http/announcements/delete_ann'

import all_mat from '../http/materials/all_mat'

const TEST_REST = () => {
  // let data = new FormData()
  // data.append('thema', 'Кукушка')
  // data.append('user_id', '259592')
  // data.append('description', 'Коротко о том как смеется Кукушкина')
  // data.append('date_time', '2022-01-01 00:00:00')
  // data.append('online', '1')
  // data.append('type', '2')
  // data.append('site', 'NULL')
  // data.append('space', '2')









 

  return (
    <div>
    <div>
    <h2>announcement</h2>
    {/* <button  onClick={all_mat}>all_mat</button> <br />
    <button onClick={change_ann}>change_ann</button> <br /> */}
    {/* <button onClick={delete_ann}>delete_ann</button> <br /> */}



    <div>
    <form action="#" method="POST" onSubmit={save_ann}>
    <div> <input type="text" name="thema"/> <br /></div>
    <div> <input type="text" name="user_id"/> <br /></div>
    <div> <input type="text" name="description"/> <br /></div>
    <div> <input type="text" name="date_time"/> <br /></div>
    <div> <input type="text" name="online"/> <br /></div>
    <div><input type="text" name="type"/> <br /></div>
    <div> <input type="text" name="space"/> <br /></div>
    <div> <input type="text" name="site"/> </div>
   
   
   
   
    <button>save_ann</button> 

    </form> 

    <button onClick={all_mat}>All mat</button>
    

      
     </div>
    
        
    </div>
         
    
    </div>

   
  )
}

export default TEST_REST
