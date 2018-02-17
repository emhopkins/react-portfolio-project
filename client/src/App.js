import React, { Component } from 'react';
// import SelectedQuotes from './SelectedQuotes';
import QuoteSearch from './QuoteSearch';

class App extends Component {
  state = {
    selectedQuotes: [],
  }

  removeQuoteItem = (itemIndex) => {
    const filteredQuotes = this.state.selectedQuotes.filter(
      (item, idx) => itemIndex !== idx,
    );
    this.setState({ selectedQuotes: filteredQuotes });
  }

  addQuote = (quote) => {
    const newQuotes = this.state.selectedQuotes.concat(quote);
    this.setState({ selectedQuotes: newQuotes });
  }

  render() {
    const { selectedQuotes } = this.state;

    return (
      <div className='App'>
        <div className='ui text container'>
          <QuoteSearch
            onQuoteClick={this.addQuote}
          />
        </div>
      </div>
    );
  }
}

export default App;
