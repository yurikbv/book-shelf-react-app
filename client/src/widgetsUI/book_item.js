import React from 'react';
import {Link} from "react-router-dom";

const BookItem = (item) => {

  let count = (review,overflow) => {
    if(overflow) {
      let screen = window.innerWidth;
      let count = screen > 1600 ? 800 : screen > 1200 && screen < 1600 ? 500 : screen < 1200 && screen > 768
        ? 300 : screen < 768 && screen > 480 ? 200 : 80;
      review = review.substr(0,count);
      return `${review}...`;
    }
    return review;
  };

  return (
    <Link to={`/books/${item._id}`} className="book_item">
      <div className="book_cover">
        <img src={`/images/${item.cover}`} alt={item.name}/>
      </div>
      <div className="book_container">
        <div className="book_header">
          <h2>{item.name}</h2>
        </div>
        <div className="book_items">
          <div className="book_author">{item.author}</div>
          <div className="book_bubble">
            <strong>Price</strong> {item.price}
          </div>
          <div className="book_bubble">
            <strong>Pages</strong> {item.pages}
          </div>
          <div className="book_bubble rating">
            <strong>Rating</strong> {item.rating}
          </div>
          <p className="book_review">{count(item.review,item.overflow)}</p>
        </div>
      </div>
    </Link>
  );
};

export default BookItem;
