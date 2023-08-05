import {createStore, applyMiddleware} from "redux"
 
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMedelwere from "redux-thunk"
import rootreducer from "./rootReducer"

const Store = createStore(rootreducer, composeWithDevTools(applyMiddleware(thunkMedelwere)))

export default Store