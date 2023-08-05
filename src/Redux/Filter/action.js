import { SEARCH, SELECTODOTYPE } from "./actionType"

export const searchTodo = (searchText) => {

    return{
        type: SEARCH,
        payload: searchText
    }

}


export const selectTodoType = (todotype) => {

    return{
        type: SELECTODOTYPE,
        payload: todotype
    }

}