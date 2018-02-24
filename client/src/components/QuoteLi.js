import React, { Component } from 'react';

class QuoteLi extends Component {

  constructor() {
    super();
 
    this.state = {
      clicks: 0
    };
  }
 
  handleOnClick = event => {
  	console.log('hi!')
    this.setState({
      clicks: this.state.clicks += 1
    });
  }
 
  render(){
    return (
      <div>
      <li key={this.props.index}>{this.props.quote.text}</li><button onClick={this.handleOnClick}>Click Number: {this.state.clicks}</button>
      </div>
    );
  }
}

export default QuoteLi
