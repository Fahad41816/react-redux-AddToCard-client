import { ADDEDTODO, DELETETODO, LOADEDTODOS, UPDATETODO } from "./actionType";

export const loaded = (todos) => {

    return{
        type: LOADEDTODOS,
        payload: todos
    }

};


export const addedTodo = (todo) => {

    return{
        type:ADDEDTODO,
        payload: todo
    }

};


export const deletedtTodo = (todoId) => {

  return{
    type: DELETETODO,
    payload: todoId
  }

};



export const updateTodo = (updatedTodo, id) => {

    return{
      type: UPDATETODO,
      payload: {
        id,       
        updatedTodo
      }
    }

};
 