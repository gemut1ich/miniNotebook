import axios from "axios";
import React from "react";
class FormContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { titleValue: this.props.titleText, contentValue: "" };
    console.log("titleValue: ", this.props.titleText);

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ titleValue: event.target.value });
    console.log('titleValue: ', this.state.titleValue);

  }

  handleContentChange(event) {
    this.setState({ contentValue: event.target.value });
    console.log('contentValue: ', this.state.contentValue);
  }

  handleSubmit(event) {
    event.preventDefault();
    const newNote = {
        title: this.state.titleValue,
        content: this.state.contentValue
    };
    this.props.setNotes(this.props.notes.concat(newNote));
    this.setState({ titleValue: "", contentValue: "" });
    axios.post("http://localhost:8000/api/notes/", newNote)
    this.props.setShowModal(false);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <ul className="flex-outer">
            <li>
              <label htmlFor="title">Title</label>
              <textarea
                id="title"
                name="title"
                type="text"
                rows="6"
                cols="65"
                value={this.state.titleValue}
                onChange={this.handleTitleChange}
              />
            </li>
            <li>
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                name="content"
                type="text"
                rows="6"
                cols="65"
                value={this.state.contentValue}
                onChange={this.handleContentChange}
              />
            </li>
            <input type="submit" value="Submit" />
          </ul>
        </form>
      </div>
    );
  }
}

export default FormContent;
