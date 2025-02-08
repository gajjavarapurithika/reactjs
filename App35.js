import React, { Component } from 'react';

class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = null;
  }

  componentDidMount() {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  }

  setInputRef = (element) => {
    this.inputRef = element;
  };

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.setInputRef}
          placeholder="Focus me on mount" // fixed typo here
        />
      </div>
    );
  }
}

export default FocusInput;
