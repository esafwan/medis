'use strict';

import React from 'react';
import store from '../../../store';
import actions from '../../../actions';

class Favorite extends React.Component {
  componentDidMount() {
    $(React.findDOMNode(this)).sortable();
  }

  render() {
    return <nav className="nav-group">
      <h5 className="nav-group-title"></h5>
      <a className="nav-group-item active">
        <span className="icon icon-flash"></span>
        QUICK CONNECT
      </a>
      <h5 className="nav-group-title" onClick={store.dispatch.bind(null, actions('addFavorite'))}>FAVORITES</h5>
      {
        this.props.favorites.map(favorite => {
          return <a
            key={favorite.name}
            className="nav-group-item"
          >
            <span className="icon icon-home"></span>
            {favorite.name}
          </a>;
        })
      }
    </nav>;
  }

  componentWillUnmount() {
  }
}

export default Favorite;
