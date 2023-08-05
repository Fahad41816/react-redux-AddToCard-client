import React, { useEffect, useState } from 'react';
import BooklistForm from './BooklistForm';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
 
import loadCard from '../Redux/todos/Thunk/loadedCard';
import { selectTodoType } from '../Redux/Filter/action';
import Navbar from './Navbar';

const Main = () => {
    const dispatch =  useDispatch()
    const todos =  useSelector(State => State.todo)
    const filter =  useSelector(State => State.filter)
    console.log(filter)
    const {todotype} = filter
    const [editCard, setCarditem] = useState({});
    const [CheckUpdateOrAdd, setCheckUpdateOrAdd] = useState(false);
    const [search, setsearch] = useState("");
    

    useEffect(() => {
        dispatch(loadCard)
    }, [dispatch]);
   
   const edithandler = (card) => {
     setCarditem(card)
     setCheckUpdateOrAdd(true)
   }

   const changefilterType = (type) => {

        dispatch(selectTodoType(type))

   }

    const searchTodo = (e) => {

        setsearch(e.target.value)

    }

    return (
        <>
        <Navbar searchtodohandler={searchTodo}></Navbar>
        <main className="py-12 2xl:px-6">
            <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
                <div className="order-2 xl:-order-1">
                    <div className="flex items-center justify-between mb-12">
                    <h4 className="mt-2 text-xl font-bold">Book List</h4>
            
                    <div className="flex items-center space-x-4">
                        <button onClick={() => changefilterType("All")}  className={`filter-btn ${todotype == "All" && "active-filter"}`} id="lws-filterAll">All</button>
                        <button onClick={() => changefilterType("Featured")} className={`filter-btn ${todotype == "Featured" && "active-filter"}`} id="lws-filterFeatured">Featured</button>
                    </div>
                    </div>
                    <div className="lws-bookContainer">
                    {/* <!-- Card 1 --> */}
                    {
                        todos.filter(todo => {
                            if(search){
                                return todo.name.toLowerCase().includes(search.toLowerCase())
                            }
                            return true
                        }).filter(todo =>{
                            switch(todotype){
                                case "Featured":
                                    return todo.featured
                                default:
                                return true    
                            }
                               
                        }).map(todoCard => (
                            <Card key={todoCard.id} todoitem={todoCard} EditHandler={edithandler} ></Card>
                        ))
                    }
                    </div>
                </div>
                <div>
                  <BooklistForm editcarditem={editCard} checkactionType={CheckUpdateOrAdd} setupdateCard={setCarditem} setcheckupdate={setCheckUpdateOrAdd}></BooklistForm>
                </div>
            </div>
        </main>
    </>    
    );
};

export default Main;