import React, {Component} from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addBook, clearNewBook } from "../../actions";

class AddBook extends Component {

  state = {
    formData: {
      name:'',
      author: '',
      cover: '',
      review: '',
      pages: '',
      price: '',
      rating: ''
    }
  };

  handleInput = (event,name) => {
    const newFormData = {...this.state.formData,};
    newFormData[name] = event.target.value;
    this.setState({
      formData: newFormData
    })
  };

  handleImage = (event) => {
    const newFormData = {...this.state.formData,};
    newFormData.cover = event.target.files[0].name;
    this.setState({
      formData: newFormData,
    })
  };

  showNewBook = (book) => (
    book.post ?
      <div className="conf_link">
        Okay!!! <Link to={`/books/${book.bookId}`}>
          Click to see the Post
        </Link>
      </div>
      : null
  );

  submitForm = (event) => {
    event.preventDefault();
    this.props.dispatch(addBook({
      ...this.state.formData,
      ownerId: this.props.user.login.id,
      price: `${this.state.formData.price}$`
    }))
  };

  componentWillUnmount() {
    this.props.dispatch(clearNewBook())
  }

  render() {
    return (
      <div className="rl_container article">
        <form onSubmit={this.submitForm}>
          <h2>Add a review</h2>
          <div className="form_element">
            <input
              type="text"
              placeholder="Enter name"
              value={this.state.formData.name}
              onChange={(event) => this.handleInput(event,'name')}
            />
          </div>
          <div className="form_element">
            <input
              type="text"
              placeholder="Enter author"
              value={this.state.formData.author}
              onChange={(event) => this.handleInput(event,'author')}
            />
          </div>
          <div className="form_element">
            <input
              type="file"
              accept="image/*"
              onChange={(event) => this.handleImage(event)}
            />
          </div>
          {
            this.state.formData.cover ?
              <div style={{textAlign: "center"}}>
                <img
                  style={{width: "200px"}}
                  src={`/images/${this.state.formData.cover}`}
                  alt={this.state.formData.author}/>
              </div>
              : null
          }
          <textarea
            value={this.state.formData.review}
            onChange={(event) => this.handleInput(event,'review')}
            rows="10"
          />
          <div className="form_element">
            <input
              type="number"
              placeholder="Enter pages"
              value={this.state.formData.pages}
              onChange={(event) => this.handleInput(event,'pages')}
            />
          </div>
          <div className="form_element">
            <input
              type="text"
              placeholder="Enter price"
              value={this.state.formData.price}
              onChange={(event) => this.handleInput(event,'price')}
            />
          </div>
          <div className="form_element">
            <input
              type="number"
              placeholder="Enter rating"
              value={this.state.formData.rating}
              onChange={(event) => this.handleInput(event,'rating')}
            />
          </div>
          <button type="submit">Add review</button>
          {
            this.props.books.newBook ?
              this.showNewBook(this.props.books.newBook)
              : null
          }
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(AddBook);