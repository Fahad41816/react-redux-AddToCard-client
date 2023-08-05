import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
 
 
import addCard from '../Redux/todos/Thunk/addcard';
import updateCard from '../Redux/todos/Thunk/updateCard';
 

const BooklistForm = ({editcarditem, checkactionType, setcheckupdate, setupdateCard}) => {

  const dispatch = useDispatch()
 
  const [check, setcheck] = useState(true);
  
   
  
  const {id,name, author, thumbnail, price, rating, featured} = editcarditem 
  
  const checkHandler = (e) => {
 
    setcheck(e.target.checked)
       
  }

  const  formValueHandler = (event) => {

    event.preventDefault();
    const name = event.target.Name.value;
    const author = event.target.author.value;
    const thumbnail = event.target.thumbnail.value;
    const price = event.target.price.value;
    const rating = event.target.rating.value;
    const featured = check

    const todovalue = {
      name,
      author,
      thumbnail,
      price,
      rating,
      featured
    }

     
        if(checkactionType){      
          dispatch(updateCard(todovalue, id))
          setcheckupdate(false) 
          setupdateCard({})
        }else{
          dispatch(addCard(todovalue));
          
        }

    event.target.reset()
    

  }

    return (
        <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
              <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
              <form onSubmit={formValueHandler} className="book-form">
                <div className="space-y-2">
                  <label for="name">Book Name</label>
                  <input required className="text-input" type="text" defaultValue={name && name } id="input-Bookname" name="Name" />
                </div>
    
                <div className="space-y-2">
                  <label for="category">Author</label>
                  <input required className="text-input" type="text" defaultValue={author && author } id="input-Bookauthor" name="author" />
                </div>
    
                <div className="space-y-2">
                  <label for="image">Image Url</label>
                  <input required className="text-input" type="text" defaultValue={thumbnail && thumbnail } id="input-Bookthumbnail" name="thumbnail" />
                </div>
    
                <div className="grid grid-cols-2 gap-8 pb-4">
                  <div className="space-y-2">
                    <label for="price">Price</label>
                    <input required className="text-input" type="number" defaultValue={price && price } id="input-Bookprice" name="price" />
                  </div>
    
                  <div className="space-y-2">
                    <label for="quantity">Rating</label>
                    <input required className="text-input" type="number" defaultValue={rating && rating } id="input-Bookrating" name="rating" min="1" max="5" />
                  </div>
                </div>
    
                <div className="flex items-center">
                  <input id="input-Bookfeatured" type="checkbox" onChange={checkHandler}      name="featured" className="w-4 h-4" />
                  <label for="featured" className="ml-2 text-sm"> This is a featured book </label>
                </div>
    
               <button type="submit" className="submit" id="submit"> {name ? "update Book" : "Add Book" } </button> 
                 
                
                
              </form>
            </div>
    );
};

export default BooklistForm;