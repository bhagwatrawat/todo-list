import React,{Component} from 'react'
import List from './components/List'
import ReactPlayer from 'react-player'
import './css/App.css'
class App extends Component {

constructor(){
super()
this.state={
newItem:'',
items:[]
  }
 this.AddHandler=this.AddHandler.bind(this)
 this.newItemHandler=this.newItemHandler.bind(this)
this.deleteHandler=this.deleteHandler.bind(this)
this.editHandler=this.editHandler.bind(this) }


AddHandler(e){
  e.preventDefault();
if(this.state.newItem!==''){
const items=[this.state.newItem,...this.state.items]
this.setState({
newItem:'',
items:items
})
}
}

deleteHandler(index){
const items=this.state.items
items.splice(index,1)
this.setState({
items:items
})
}
editHandler(value,todoindex){
  console.log(value)
  console.log(todoindex )
  const items=this.state.items
  items[todoindex]=value
  this.setState({
    items:items
  })

}

newItemHandler(e){


this.setState({newItem:e.target.value})

}
render(){

  return <div  className="title">
  <header id="Form">
  <h1>TODO LIST </h1>
  <form id="form" onSubmit={this.AddHandler}>
  <input  type="text" value={this.state.newItem} onChange={this.newItemHandler} placeholder="Enter your task"/>
  <button type="submit">Add</button>
  </form>
   <p>{this.state.newItem}</p>
  <List click={this.deleteHandler} item={this.state.items} edit={this.editHandler}/>
  </header>
  <ReactPlayer className="react-player" controls="true"
        url="https://youtu.be/IYGVvwD44TM" width="450px" height="300px"
      />

  </div>
}
}
 export default App
