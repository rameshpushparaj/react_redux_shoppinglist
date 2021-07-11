import React, { useRef } from 'react';
import { addItem, removeItem } from '../action/itemActions';
import { connect } from 'react-redux';

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('handleSubmit');
    this.props.dispatch(addItem(this.inputRef.current.value));

    this.inputRef.current.value = '';
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.inputRef} />
        </form>
        <ul>
          {this.props.items.map((item, index) => (
            <li key={item.id}>
              {item.name}{' '}
              <button onClick={() => this.props.dispatch(removeItem(index))}>
                X
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.itemReducer
  };
}
export default connect(mapStateToProps)(ShoppingList);
