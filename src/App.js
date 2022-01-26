import React, { Component } from "react";

export default class App extends Component {
  state = {
    images: null,
    loading: false,
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch('https://pixabay.com/api/?q=cat&page=1&key=22754587-14ea7ef4a3e62d80c98f18cd3&image_type=photo&orientation=horizontal&per_page=12')
      .then(res => res.json())
      .then(images => this.setState({ images })).finally(() => this.setState({ loading: false }))
  }

  render() {
    return (
      <div>
        {this.state.loading && (<div>Загружаем ...</div>)}
        {this.state.images && (<div>Тут будет галерея картинок</div>)}
      </div>
    );
  }
}


