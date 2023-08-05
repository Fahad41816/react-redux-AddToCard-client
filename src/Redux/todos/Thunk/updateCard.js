import {updateTodo } from "../action"

const updateCard = (updateitem, id) => {
     
    const { name, author, thumbnail, price, rating, featured} = updateitem
    return async(dispatch) => {

        const todo = await fetch(`https://react-redux-addtocard-project.onrender.com/books/${id}`,{
            method:"PATCH",
            body: JSON.stringify({
                name:name,
                author:author,
                thumbnail:thumbnail,
                price: price,
                rating:rating,
                featured:featured
            }),
            headers:{
                'content-type': "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
        
        dispatch(updateTodo(todo, id))

    }

}

export default updateCard;