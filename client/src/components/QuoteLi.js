import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upvoteQuote } from '../actions/quoteActions';
import { bindActionCreators } from 'redux';

class QuoteLi extends Component {

  handleOnClick = event => {
    this.props.upvoteQuote(this.props.quote);
  }
 
  render(){
    return (
      <div>
      <li key={this.props.index}>{this.props.quote.text}</li><button onClick={this.handleOnClick}>Upvotes: {this.props.quote.votes === null ? 0 : this.props.quote.votes}</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    upvoteQuote
  }, dispatch)
}
 
export default connect(null, mapDispatchToProps)(QuoteLi)