import React from "react";
import unsplash from "../api/unsplash";

import Searchbar from "./Searchbar";
import ImageList from "./ImageList";

export default class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term
      }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: 15 }}>
        <Searchbar onSubmit={this.onSearchSubmit} />
        <p>Found: {this.state.images.length} images</p>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
