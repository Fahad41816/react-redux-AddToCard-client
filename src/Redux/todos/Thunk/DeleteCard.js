import {deletedtTodo } from "../action"

const DeleteCard = (todoId) => {
    
    return async(dispatch) => {

        const todo = await fetch(`https://react-redux-addtocard-project.onrender.com/books/${todoId}`,{
            method:"DElETE",
        }) 

        dispatch(deletedtTodo(todoId))

    }

}

export default DeleteCard;