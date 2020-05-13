import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      tweet: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Characters left {this.props.maxChars - this.state.tweet.length}</h1>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.tweet}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TwitterMessage;
