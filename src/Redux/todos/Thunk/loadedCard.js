import { loaded } from "../action"

const loadCard = async(dispatch, getState) => {
 
        const todos = await fetch('https://react-redux-addtocard-project.onrender.com/books').then(res => res.json())
       
        dispatch(loaded(todos))
   

}

export default loadCard;