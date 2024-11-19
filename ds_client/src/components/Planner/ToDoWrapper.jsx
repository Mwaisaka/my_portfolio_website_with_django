import React, { useState, useEffect } from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import EditToDoForm from "./EditToDoForm";
import ToDo from "./ToDo";
import "./ToDoList.css";

function ToDoWrapper() {
  const [todos, setToDos] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/tasks")
      .then((res) => res.json())
      .then(setToDos);
  }, []);

  const addToDo = (todo) => {
    setToDos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const deleteTodo = async (id) => {
    //Ask for the user confirmation before deleting the task
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmDelete) {
      try {
        const response = await fetch(`http://127.0.0.1:5555/tasks/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          setToDos(todos.filter((todo) => todo.id !== id));
          alert("Task deleted successfully");
        }
        if (response.status === 404) {
          throw new Error("Task not found");
        }
      } catch (err) {
        console.log(err.message);
        alert(err.message);
      }
    } else {
      //If the user cancels the deletion, do nothing
      alert("Task deletion cancelled.");
    }
  };

  const toggleComplete = (id) => {
    setToDos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setToDos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setToDos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const clearTasks = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to clear all tasks?"
    );
    if (confirmClear) {
      setToDos([]);
    }
  };

  // Separate active and completed tasks
  const activeTasks = todos.filter((todo) => !todo.completed);
  const completedTasks = todos.filter((todo) => todo.completed);

  // Tasks Left count for the active tasks
  const tasksLeftCount = activeTasks.length;
  // const tasksLeftCount = todos.filter((todo) => !todo.completed).length;
  
  // Tasks Completed count for the completed tasks
  const tasksCompletedCount = completedTasks.length;

  return (
    <div className="ToDoWrapper animate-swipeUp">
      <div>
        <h1 className="font-bold">MY TASKS</h1>
        <ToDoForm addToDo={addToDo} />
        {/* display todos */}
        <div className="bg-gray-400 w-[100%] py-2 border rounded-lg">
          <div className="flex items-center justify-between w-[95%] mb-4 ml-3 text-xl">
            <h3>Tasks List</h3>
            <button
              className="transform transition duration-300 ease-in-out hover:scale-110"
              onClick={clearTasks}
            >
              Clear all tasks
            </button>
          </div>

          {/* Render Active Tasks */}
          <h3 className="ml-4 text-lg">Active Tasks[{tasksLeftCount}]</h3>
          {activeTasks.length > 0 ? (
            activeTasks.map((todo) =>
              todo.isEditing ? (
                <EditToDoForm key={todo.id} editToDo={editTask} task={todo} />
              ) : (
                <ToDo
                  key={todo.id}
                  task={todo}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                  toggleComplete={toggleComplete}
                />
              )
            )
          ) : (
            <p className="ml-4 text-gray-600">No active tasks</p>
          )}

          {/* Render Completed Tasks */}
          <h3 className="ml-4 text-lg mt-6">Completed Tasks [{tasksCompletedCount}]</h3>
          {completedTasks.length > 0 ? (
            completedTasks.map((todo) =>
              todo.isEditing ? (
                <EditToDoForm key={todo.id} editToDo={editTask} task={todo} />
              ) : (
                <ToDo
                  key={todo.id}
                  task={todo}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                  toggleComplete={toggleComplete}
                />
              )
            )
          ) : (
            <p className="ml-4 text-gray-600">No completed tasks</p>
          )}

          {/* {todos.map((todo) =>
            todo.isEditing ? (
              <EditToDoForm key={todo.id} editToDo={editTask} task={todo} />
            ) : (
              <ToDo
                key={todo.id}
                task={todo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                toggleComplete={toggleComplete}
              />
            )
          )} */}
        </div>
      </div>
    </div>
  );
}
export default ToDoWrapper;
