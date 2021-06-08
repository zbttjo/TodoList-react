import React, {useEffect, useState} from "react";
import './App.css';
//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);

  useEffect(() =>{
    getLocalTodos();
  }, []);

  useEffect(() =>{
    saveLocalTodos();
  }, [todos]);

  //Save to local
  function saveLocalTodos(){
      localStorage.setItem('todos', JSON.stringify(todos))
    };
  function getLocalTodos(){
    if(localStorage.getItem('todos') ===null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };
  return (
    <div className="App">
       <header>
      <h1>To do List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
