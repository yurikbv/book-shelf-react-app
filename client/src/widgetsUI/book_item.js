import React,{Component} from 'react';
import {Link} from "react-router-dom";

class BookItem extends Component {
  state = {
    width: window.innerWidth
  };

  componentDidMount() {
    window.addEventListener('resize',this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize',this.onResize);
  }

  onResize = () => {
    this.setState({
      width: window.innerWidth
    })
  };

  count = (review,overflow) => {
    if(overflow) {
      let screen = this.state.width;
      let count = screen > 1600 ? 1800 : screen > 1200 && screen < 1600 ? 500 : screen < 1200 && screen > 768
        ? 300 : screen < 768 && screen > 480 ? 200 : 80;
      review = review.substring(0,count);
      return `${review}...`;
    }
    return review;
  };

  render() {

    const {_id,cover,name,author,price,pages,rating,review,overflow} = this.props;

    return (
      <Link to={`/books/${_id}`} className="book_item">
        <div className="book_cover">
          <img src={`/images/${cover}`} alt={name}/>
        </div>
        <div className="book_container">
          <div className="book_header">
            <h2>{name}</h2>
          </div>
          <div className="book_items">
            <div className="book_author">{author}</div>
            <div className="book_bubble">
              <strong>Price</strong> {price}
            </div>
            <div className="book_bubble">
              <strong>Pages</strong> {pages}
            </div>
            <div className="book_bubble rating">
              <strong>Rating</strong> {rating}
            </div>
            <p className="book_review">{this.count(review,overflow)}</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default BookItem;
