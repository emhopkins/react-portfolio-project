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
      <li key={this.props.index}>{this.props.quote.text}</li><button onClick={this.handleOnClick}>Upvotes: {this.props.stateQuote.votes === null ? 0 : this.props.stateQuote.votes}</button>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {

  if (state.quotes.data[ownProps.quote.id] !== undefined) {
    return {stateQuote: state.quotes.data[ownProps.quote.id - 1]}
  } else {
      return {stateQuote: state.quotes.data}
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    upvoteQuote
  }, dispatch)
}
 
export default connect(mapStateToProps, mapDispatchToProps)(QuoteLi)