import React, {Component} from 'react';
import { connect } from "react-redux";
import {getBookWithReviewer} from "../../actions";

class BookView extends Component {

  componentWillMount() {
    this.props.dispatch(getBookWithReviewer(this.props.match.params.id))
  }

  render() {
    return (
      <div>
        Book view
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookView);