import { useState,useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid"
import { BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  const [todos, setTodos] = useState([]);

    const todoNameRef = useRef();

    const handleAddTodo = () => {
      //タスクの追加
      const name = todoNameRef.current.value;
      if(name === "") return ;
      setTodos((prevTodos) => {
        return [...prevTodos, {id: uuidv4(),game: name, completed: false}];
      });
      todoNameRef.current.value = null;
    };

    const toggleTodo = (id) => {
      const newTodos = [...todos];
      const todo = newTodos.find((todo) => todo.id === id);
      todo.completed = !todo.completed;
      setTodos(newTodos);
    }

    const handleClear = () => {
      const newTodos = todos.filter((todo) => !todo.completed);
      setTodos(newTodos);
    }

  return (
    <div>
      <TodoList name={todos} toggleTodo={toggleTodo}/>    
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* ページコンポーネントのルーティング */}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>  
      </div>
  )
}

export default App;