import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upvoteQuote } from '../actions/quoteActions';

class QuoteLi extends Component {

  constructor() {
    super();
 
    this.state = {
      // id: this.props.quote.id
    };
  }
 
  handleOnClick = event => {
  	console.log('hi!')
    // this.setState({
    //   clicks: this.state.clicks += 1
    // });

    event.preventDefault();
    // Destructure addCharacter and history from the components props
    const { upvoteQuote, history } = this.props;
   
    upvoteQuote(this.props.quote);

  }


 
  render(){
    return (
      <div>
      <li key={this.props.index}>{this.props.quote.text}</li><button onClick={this.handleOnClick}>Click Number: {this.state.clicks}</button>
      </div>
    );
  }
}

export default connect(null, { upvoteQuote })(QuoteLi)
