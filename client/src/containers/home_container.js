import React, {Component} from 'react';
import {connect} from "react-redux";

import {getBooks} from "../actions";
import BookItem from "../widgetsUI/book_item";


class HomeContainer extends Component {

  componentWillMount() {
    this.props.dispatch(getBooks(3,0))
  }

  renderItems = (books) => (
    books.list ?
      books.list.map(item => (
        <BookItem {...item} key={item._id} overflow={true}/>
      ))
      :
      null
  );

  loadMore = () => {
    let count = this.props.books.list.length;
    this.props.dispatch(getBooks(3,count,'',this.props.books.list))
  };

  render() {
    return (
      <div>
        {this.renderItems(this.props.books)}
        <div
          onClick={this.loadMore}
          className="loadmore">Load More</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(HomeContainer);