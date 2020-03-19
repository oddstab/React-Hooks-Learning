import React, { useState, useCallback, FormEvent, useRef, createRef, useEffect } from 'react'
import './TodoList.scss'

const LS_KEY = '$todo-list';
let idSeq = Date.now();

interface ITodo {
  id: number;
  text: string | undefined;
  completed: boolean;
}

//Control
interface IControlProps {
  addTodo: (todo: ITodo) => void;
}

const Control = (props: IControlProps) => {
  const { addTodo } = props;

  //在ts中使用ref hook需要塞一個值
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const input = inputRef.current as HTMLInputElement;

    //獲取新的text
    const newText = input.value.trim();

    //驗證字串是否為空
    if (newText.length === 0) {
      return;
    }

    //新增todo
    addTodo({
      id: ++idSeq,
      text: newText,
      completed: false
    })

    input.value = '';
  }

  return (
    <div className="control">
      <h1>Todos</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          ref={inputRef}
        />
      </form>
    </div>
  )
}

//TodoItem
type ITodoProps = {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

type ITodoItemProps = { todo: ITodo } & ITodoProps;

const TodoItem = (props: ITodoItemProps) => {
  const {
    todo,
    toggleTodo,
    removeTodo
  } = props;

  const onChange = () => {
    toggleTodo(todo.id);
  }

  const onRemove = () => {
    removeTodo(todo.id);
  }

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        onChange={onChange}
        checked={todo.completed}
      />
      <label
        className={todo.completed ? 'completed' : ''}
      >
        {todo.text}
      </label>
      <button onClick={onRemove}>&#xd7;</button>
    </li>
  )
}

//Todos
type ITodosProps = { todos: ITodo[] } & ITodoProps;

const Todos = (props: ITodosProps) => {
  const {
    todos,
    removeTodo,
    toggleTodo
  } = props;
  return (
    <ul className="todos">
      {
        todos.length !== 0
          ?
          todos.map(todo => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
              />
            )
          })
          :
          <li style={{
            textAlign: 'center',
            fontSize: '24px'
          }}>沒有Todo~</li>
      }
    </ul>
  )
}

//TodoList
const TodoList = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  //新增todo
  const addTodo = useCallback((todo: ITodo) => {
    //設置成一個新的todos
    dispatch({
      type: 'add',
      payload: todo
    })
  }, []);

  //刪除todo
  const removeTodo = useCallback((id: number) => {
    //過濾todos,傳回除了跟id符合以外的所有todo
    dispatch({
      type: 'remove',
      payload: id
    })
  }, []);

  //切換完成狀態
  const toggleTodo = useCallback((id: number) => {
    //判斷是否已經完成，把completed取反
    dispatch({
      type: 'toggle',
      payload: id
    })
  }, []);

  type ActionType = 'set' | 'add' | 'remove' | 'toggle';

  type DispatchType = {
    type: ActionType;
    payload?: any;
  }

  const dispatch = (action: DispatchType) => {

    const {
      type,
      payload
    } = action;

    switch (type) {
      //設置
      case 'set':
        setTodos(payload)
        break;
      //新增
      case 'add':
        setTodos(todos => [...todos, payload])
        break;
      //刪除
      case 'remove':
        setTodos(todos => todos.filter(todo => {
          return todo.id !== payload;
        }));
        break;
      //切換
      case 'toggle':
        setTodos(todos => todos.map(todo => {
          return todo.id === payload
            ?
            {
              ...todo,
              completed: !todo.completed
            }
            :
            todo;
        }))
        break;
      default:
        return
    }
  }

  useEffect(() => {
    //從localStorage取值或給預設值[]
    console.log('取值');
    const todos: ITodo[] = JSON.parse(localStorage.getItem(LS_KEY) || '[]');
    setTodos(todos);
  }, []);

  useEffect(() => {
    //todos存入localStorage
    localStorage.setItem(LS_KEY, JSON.stringify(todos))
  }, [todos]);

  return (
    <div className="todo-list">
      <Control addTodo={addTodo} />
      <Todos
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        todos={todos}
      />
    </div>
  )
}

export default TodoList;