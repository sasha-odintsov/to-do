import './App.css';
import Input from './Input';
import List from './List';
import { useSelector } from "react-redux"

function App() {
  const item = useSelector(state => state.toDos)
  console.log(item)
  return (
    <div className="App">
      <h1>
        To Do List
      </h1>
      <Input />
      <List toDos={item}/>
    </div>
  );
}

export default App;
