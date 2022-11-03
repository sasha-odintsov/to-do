import { useState } from "react";
import { useDispatch } from "react-redux";
import addItem from "./redux/actions"

export default function Input () {
  const [item, setItem] = useState('');
  const dispatch = useDispatch();
  function handleClick(e){
    e.preventDefault();
    dispatch(addItem(item))
  }

  return (
    <>
      <input type='text' value={item} onChange={(e)=>setItem(e.target.value)}/>
      <button onClick={handleClick}>Submit</button>
    </>
  )
} 