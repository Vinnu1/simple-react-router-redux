import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class App extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const items = this.props.items.map((item, index) => {
      return (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>)
    })
    return (
      <div>
        <h1>
          Items
        </h1>
        {items}

      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(App);
