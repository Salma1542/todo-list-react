import './App.css';
import {useRef, useState} from 'react';

function App() {
  const [x,setx]= useState([])
  const inputRef =useRef()
  const add= ()=>{
const value=inputRef.current.value
const newData={completed:false,value}
setx([...x,newData])
inputRef.current.value=" "
  } 
  const itemDone=(index)=>{
    const newx=[...x]
    x[index].completed= !x[index].completed
    setx(newx)
  }
const toDelet=(index)=>{
  const newx=[...x]
  newx.splice(index,1)
  setx(newx)
}
  return (
    <div className="App">
      <h2>TO-DO-LIST 💜</h2>
      <ul>
        {
      x.map(({value,completed},index)=>{
        return <div className='d'><li className={completed?"diffstyle":""} onClick={()=>itemDone(index)}>{value}  </li>
        <span onClick={()=>toDelet(index)}>❌</span>
        </div>
      }) 
        }
      </ul>
      <input ref={inputRef} placeholder="Enter new task"/>
      <button onClick={add}>New Task➕</button>
    </div>
  );
}

export default App;
