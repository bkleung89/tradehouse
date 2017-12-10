import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  deleteProduct,
} from '../actions/actions.jsx';

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
  }

  onDeleteClick() {
    this.props.dispatch(deleteProduct(this.props.index));
  }

  render() {
    console.log(this.props);
    return (
      <li>
        <a href="#">{this.props.product.productName.trim()}</a>
        <a href="#" onClick={this.onDeleteClick.bind(this)} style={{textDecoration: 'none'}}>[x]</a>
        <span> | Quantity: {this.props.product.productQuantity} | Price: {this.props.product.price} | Description: {this.props.product.description}</span>
      </li>
    );
  }
}
ProductItem.contextTypes = {
  store: PropTypes.object
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProduct: () => dispatch({
      type: 'DELETE_PRODUCT'
    })
  }
}

export default connect(mapDispatchToProps)(ProductItem);
