import React, {PureComponent} from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getBook, updateBook, clearBook, deleteBook } from "../../actions";

class EditBook extends PureComponent {

  state = {
    formData: {
      _id: this.props.match.params.id,
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
    const newformData = {...this.state.formData,};
    newformData[name] = event.target.value;
    this.setState({
      formData: newformData
    })
  };

  handleImage = (event) => {
    const newformData = {...this.state.formData,};
    newformData.cover = event.target.files[0].name;
    this.setState({
      formData: newformData,
    })
  };

  submitForm = (event) => {
    event.preventDefault();
    this.props.dispatch(updateBook(this.state.formData))
  };

  componentWillMount() {
    this.props.dispatch(getBook(this.props.match.params.id))
  }

  componentWillReceiveProps(nextProps) {
    let book = nextProps.books.book;
    this.setState({
      formData: {
        _id:book._id,
        name:book.name,
        author: book.author,
        cover: book.cover,
        review: book.review,
        pages: book.pages,
        price: book.price,
        rating: book.rating
      }
    })
  }

  deletePost = () => {
    this.props.dispatch(deleteBook(this.props.match.params.id))
  };

  redirectUser = () => {
    setTimeout(()=> {
      this.props.history.push('/user/user-reviews')
    },1000)
  };

  componentWillUnmount() {
    this.props.dispatch(clearBook());
  }

  render() {
    return (
      <div className="rl_container article">
        {this.props.books.postDeleted ?
          <div className="red_tag">
            Post deleted.
            {this.redirectUser()}
          </div>
          : null}
        <form onSubmit={this.submitForm}>
          <h2>Edit review</h2>
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
          {
            this.props.books.updateBook ?
              <div className="edit_confirm">
                Post updated,
                <Link to={`/books/${this.props.books.book._id}`}>
                  click here to see the post
                </Link>
              </div>
              : null
          }
          <button type="submit">Edit review</button>
          <div className="delete_post">
            <div
              className="button"
              onClick={this.deletePost}
            >
              Delete review
            </div>
          </div>
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

export default connect(mapStateToProps)(EditBook);