import React, {useReducer, createContext, useContext, useRef } from "react";

//Context와 provider이 머가 다른가요>?
//Context는 기본 뼈대 같은거고 provider이 에러를 더 자세하게 표현 한 것 
// 그래서 기본적인 내용은 비슷함 

const initialTodos = [
    {
        id:1,
        text: '프로젝트 생성하기',
        done: true
    },
    {
        id:2,
        text:'컴포넌트 스타일링하기',
        done:true
    },
    {
        id:3,
        text:'Context 만들기',
        done:false
    },
    {
        id:4,
        text:'기능 구현하기',
        done:false
    }
    

];

function todoReducer(state, action) {
    switch (action.type) {
      case 'CREATE':
        return state.concat(action.todo);
      case 'TOGGLE':
        return state.map(todo =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        );
      case 'REMOVE':
        return state.filter(todo => todo.id !== action.id);
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
  
  const TodoStateContext = createContext();
  const TodoDispatchContext = createContext();
  const TodoNextIdContext = createContext();
  
  export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);
  
    return (
      <TodoStateContext.Provider value={state}>
        <TodoDispatchContext.Provider value={dispatch}>
          <TodoNextIdContext.Provider value={nextId}>
            {children}
          </TodoNextIdContext.Provider>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    );
  }
  
  export function useTodoState() {
    const context = useContext(TodoStateContext);
    if (!context) {
      throw new Error('Cannot find TodoProvider');
    }
    return context;
  }
  
  export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if (!context) {
      throw new Error('Cannot find TodoProvider');
    }
    return context;
  }
  
  export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if (!context) {
      throw new Error('Cannot find TodoProvider');
    }
    return context;
  }