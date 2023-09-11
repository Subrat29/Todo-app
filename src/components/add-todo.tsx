//if u want to use hooks then do this
"use client"

import React, {FormEvent, useState } from "react";
import {useTodos} from "@/store/todos";
const AddTodo = () => {

  const [todo, setTodo] = useState("");

  const {handleAddTodo} = useTodos();

  //typescript: FormEvent<HTMLFormElement>
  const handleFormSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" placeholder ="Write your todo" name="" value={todo} onChange={
        (event) => setTodo(event.target.value)
      }/>
      <button type="submit">ADD</button>
    </form>
  );
};

export default AddTodo;
