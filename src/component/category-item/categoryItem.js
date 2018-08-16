import React from 'react';
import CategoryForm from '../category-form/categoryForm';
import { connect } from 'react-redux';



class CategoryItem extends React.Component {

  state = {
    editing: false,
  }

  handleDouble = (id) => {
    this.setState({ editing: true, id })
  }

  updateCategory = (category) => {
    this.setState({
      editing: false
    });
    this.props.onComplete(category);
  }

  render() {

      return (
        <React.Fragment>

          <ul>
            {this.props.category.map(item => (
              <li id={item.id} key={item.id}>
                <h2>{item.name}</h2>

                <p onDoubleClick={() => this.handleDouble(item.id)} >${item.budget}</p>

                <button onClick={() => this.props.destroy(item)}>X</button>

                {this.state.id === item.id ? <CategoryForm  buttonText='UPDATE' onComplete={this.updateCategory} item={item}/> : null}
                
              </li>
            ))}
          </ul>


        </React.Fragment>
      )
    }
  }


const mapStateToProps = state => ({
  category: state,
});

export default connect(
  mapStateToProps
)(CategoryItem);


