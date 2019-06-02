import React, { Component } from 'react'

class Search extends Component {

    constructor(props) {
        super(props);
        this.timer = null;
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch({ target }) {
        if(this.timer) clearTimeout(this.timer);
        this.timer = setTimeout(() => this.props.handleSearch(target.value), 200);
    }

  render() {
    return (
      <div className="stations-search">
        <input type="text" className="input" placeholder={`Search stations in ${this.props.title}`} onChange={this.handleSearch} />
      </div>
    )
  }
}

export default Search;