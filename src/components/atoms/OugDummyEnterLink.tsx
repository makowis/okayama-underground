import React, { Component } from 'react';

class OugDummyEnterLink extends Component<{ className: string; key: string }> {
  render() {
    return (
      <a
        key={this.props.key}
        className={this.props.className}
        href="https://www.yahoo.co.jp/"
        target="_blank"
        rel="noopener noreferrer"
      >
        ENTER
      </a>
    );
  }
}

export default OugDummyEnterLink;
