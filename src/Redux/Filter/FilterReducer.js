import { SEARCH, SELECTODOTYPE } from "./actionType";

const initialState = {
    search:"",
    todotype:"All"
}


const FilterReducer = (State = initialState, action) => {

    switch (action.type) {
        case SEARCH:
            return{
                ...State,
                search: action.payload
            }
        case SELECTODOTYPE:
            return{
                ...State,
                todotype: action.payload
            }    
 
        default:
           return State
    }


}

export default FilterReducer;