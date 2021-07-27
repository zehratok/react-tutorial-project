import React, { Component } from 'react';
import "./SearchBar.css";

class SearchBar extends Component {
    state =
        {
            search: ''
        };
    inputChanged = event => {
       // console.log(event.target.value);
        this.setState({
            search: event.target.value
        });
    }
    searchImage= () =>
    {
        //console.log('basarili');
        this.props.onSearchImage(this.state.search)
    }
    render() {

        return (
            <div className="search-bar-container ui input">
                <input type="text" onKeyPress={(e)=>{
                    if (e.key === 'Enter')
                    {
                        this.searchImage();
                    }
                }} onChange={this.inputChanged.bind(this)} placeholder="Ara..." />
                <button className="ui icon button" onClick={this.searchImage}>
                    <i className="search icon"></i>
                </button>
            </div>
        )
    }

}
export default SearchBar;