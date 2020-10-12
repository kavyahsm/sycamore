

import React  from 'react'
import { DatePicker, Space } from 'antd';

export default function Reciepe({loading, recipes}) {

    if (loading) return <h2 className="text-center mt-5">Loading recipes...</h2>
 
    function onChange(date, dateString) {
        console.log( dateString);
      }

    return (
        <div className="container my-5">

<DatePicker onChange={onChange} />

<div className="row">
            {

recipes.map((item, i)=>{

return <div className="col-sm-3" key={i}>
    <img src={item.strMealThumb} alt="imge" width="100%"/>
</div> 

})  
            }
         
        </div>
        </div>
    )
}

