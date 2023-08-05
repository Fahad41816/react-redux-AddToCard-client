import { addedTodo } from "../action"

const addCard = (book) => {
    
    return async(dispatch) => {

        const todo = await fetch('https://react-redux-addtocard-project.onrender.com/books',{
            method:"POST",
            body: JSON.stringify({
                name:book.name,
                author:book.author,
                thumbnail:book.thumbnail,
                price: book.price,
                rating:book.rating,
                featured:book.featured
            }),
            headers:{
                'content-type': "application/json; charset=UTF-8"
            }
        }).then(res => res.json())

        dispatch(addedTodo(todo))

    }

}

export default addCard;