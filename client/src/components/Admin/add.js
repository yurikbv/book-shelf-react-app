import React, {Component} from 'react';

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
    // console.dir(event.target.type);
    const newFormData = {...this.state.formData,};
    if(event.target.type === 'file') {
      newFormData[name] = event.target.files[0];
    } else newFormData[name] = event.target.value;
    this.setState({
      formData: newFormData
    })
  };

  submitForm = (event) => {
    event.preventDefault();
    console.log(this.state.formData)
  };

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
              placeholder="Enter name"
              value={this.state.formData.author}
              onChange={(event) => this.handleInput(event,'author')}
            />
          </div>
          <div className="form_element">
            <input
              type="file"
              accept="image/*"
              onChange={(event) => this.handleInput(event,'cover')}
            />
          </div>
          <textarea
            value={this.state.formData.review}
            onChange={(event) => this.handleInput(event,'review')}
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
              type="number"
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
        </form>
      </div>
    );
  }
}

export default AddBook;