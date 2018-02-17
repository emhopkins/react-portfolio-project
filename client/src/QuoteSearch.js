
import React from 'react';
import Client from './Client';

const MATCHING_ITEM_LIMIT = 25;

class QuoteSearch extends React.Component {
  state = {
    quotes: [],
    showRemoveIcon: false,
    searchValue: '',
  };

  handleSearchChange = (e) => {
    const value = e.target.value;

    this.setState({
      searchValue: value,
    });

    if (value === '') {
      this.setState({
        quotes: [],
        showRemoveIcon: false,
      });
    } else {
      this.setState({
        showRemoveIcon: true,
      });

      Client.search(value, (quotes) => {
        this.setState({
          quotes: quotes.slice(0, MATCHING_ITEM_LIMIT),
        });
      });
    }
  };

  handleSearchCancel = () => {
    this.setState({
      quotes: [],
      showRemoveIcon: false,
      searchValue: '',
    });
  };

  render() {
    const { showRemoveIcon, quotes } = this.state;
    const removeIconStyle = showRemoveIcon ? {} : { visibility: 'hidden' };

    const quoteRows = quotes.map((quote, idx) => (
      <tr
        key={idx}
        onClick={() => this.props.onQuoteClick(quote)}
      >
        <td>{quote.text}</td>
      </tr>
    ));

    return (
      <div id='quote-search'>
        <table className='ui selectable structured large table'>
          <thead>
            <tr>
              <th colSpan='5'>
                <div className='ui fluid search'>
                  <div className='ui icon input'>
                    <input
                      className='prompt'
                      type='text'
                      placeholder='Search quotes...'
                      value={this.state.searchValue}
                      onChange={this.handleSearchChange}
                    />
                    <i className='search icon' />
                  </div>
                  <i
                    className='remove icon'
                    onClick={this.handleSearchCancel}
                    style={removeIconStyle}
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {quoteRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default QuoteSearch;
