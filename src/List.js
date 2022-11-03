export default function List({toDos}) {
  return(
    <ul>
      {toDos && toDos.map((item, i) => 
        <li key={i}>{item}</li>)}
    </ul>
  )
}