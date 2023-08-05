import { updateTodo } from "./action";
import { ADDEDTODO, DELETETODO, LOADEDTODOS, UPDATETODO } from "./actionType";

const intialState =[]

const findId = (todos) => {

    const checkMaxId = todos.reduce((maxId, todo)=> Math.max(maxId, todo.id), 0 );

    return checkMaxId + 1

}

const TodoReducer = (State = intialState, action) => {

    switch (action.type) {
        case LOADEDTODOS:
            return action.payload

        case ADDEDTODO:
            const {name, author,thumbnail, price, rating, featured} =  action.payload
            return [
                ...State,
                {
                    id: findId(State),
                    name: name,
                    author: author,
                    thumbnail: thumbnail,
                    price: price,
                    rating: rating,
                    featured: featured,
                }
            ]
        case DELETETODO:
            return State.filter(todo => todo.id !== action.payload)
            
        case UPDATETODO:
            // const {id, author, thumbnail, price, rating, featured} = action.payload.updatedTodo
            return  State.map(todo => {
                if(todo.id === action.payload.id){
                    return{
                        ...todo,
                        name: action.payload.updatedTodo.name,
                        author: action.payload.updatedTodo.author,
                        thumbnail: action.payload.updatedTodo.thumbnail,
                        price: action.payload.updatedTodo.price,
                        rating: action.payload.updatedTodo.rating,
                        featured: action.payload.updatedTodo.featured,

                    }
                }else{
                    return todo
                }
            })

        default:
            return State
    }


}

export default TodoReducer;