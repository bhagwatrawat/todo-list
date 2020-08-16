import React from 'react'
const List =(props)=>{
console.log(props.item)
  const listItems=props.item.map((itemss,index)=>{
  console.log(itemss)
  console.log(index)
  return<div key={index}> <input type="text" onChange={(e)=>{props.edit(e.target.value,index)}} value={itemss} />

              <button onClick={()=>{props.click(index)}}>remove</button>
        </div>

})
return <div>{listItems}</div>
}


export default List
