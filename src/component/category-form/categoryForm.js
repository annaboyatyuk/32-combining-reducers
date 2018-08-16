import React from 'react';


class CategoryForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.item && this.props.item.name || '',
      budget: this.props.item && this.props.item.budget || '',
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if(this.props.item) {
      this.props.onComplete( {
        ...this.state,
        id: this.props.item.id,
        timestamp: this.props.item.timestamp,
        editing: false
      })
    }
    else {
    this.props.onComplete(this.state);
    this.setState({ ...this.defaultState });
    }
  }

  
  render() {

    return (
      <form onSubmit={this.handleSubmit} >
        
        <label >NAME</label>

        <input type="text" name='name' onChange={this.handleChange} value={this.state.name}/>

        <label >BUDGET</label>

        <input type="number" name='budget' onChange={this.handleChange} value={this.state.budget}/>

        <input id='submitButton' type="submit"  value={this.props.buttonText}/>

      </form>
    );
  }
}


export default CategoryForm;
