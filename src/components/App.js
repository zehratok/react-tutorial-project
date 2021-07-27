import React, { Component } from "react";
import SearchBar from './SearchBar/SearchBar';
import ImageList from './Image/ImageList';
import axios from "axios";
import "./app.css";


class App extends Component {
  state =
    {
      images:[]
    };

  onSearchImage = async (search) => {
   // console.log('App:' + search);
    const result = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: search
      },
      headers: {
        Authorization: 'Client-ID c2uwfUHNxp-kCIuS1abABZWcXW9c3my0dfpe6t5ZU3M'
      }
    })
    //console.log(result.data.results);
    this.setState({
      images:result.data.results
    });

  }
  render() {
    return (
      <div className="app-container">
        <SearchBar onSearchImage={this.onSearchImage} />
        <ImageList images={this.state.images}/>
      </div>
    )
  }

};


export default App;
