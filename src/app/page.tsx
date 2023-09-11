import React from "react";
import "./globals.css";
import AddTodo from "@/components/add-todo";
import Todos from "@/components/todos";
import Navbar from "@/components/navBar";
import { RiTodoLine } from "react-icons/ri";

const Page = () => {
  return (
    
    <main>
      <h2>
        <RiTodoLine className="icons" />
        TODO APP <RiTodoLine className="icons" />
      </h2>

      <Navbar />

      <AddTodo />

      <Todos />
    </main>
  );
};

export default Page;
