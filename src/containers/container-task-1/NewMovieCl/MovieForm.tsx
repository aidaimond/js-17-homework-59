import React from 'react';
import {Movies} from "../../../types";

interface Props {
  createMovie: (newMovie: Movies) => void;
}

interface State {
  title: string;
}

class MovieForm extends React.Component<Props> {
  state: State = {
    title: ''
  }

  onChangeFormInput (value: string) {
    this.setState({title: value});
  }

  addMovie (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.props.createMovie({
      id: Math.random().toString(),
      movieName: this.state.title
    });
    this.setState({title: ''});
  }

  render() {
    return (
      <div className="w-50">
        <form className="d-flex" onSubmit={(e) => this.addMovie(e)}>
          <label htmlFor="createMovie">New Movie
            <input
              className="form-control col m-2"
              name="movieName"
              type="text"
              placeholder="Enter movie"
              value={this.state.title}
              onChange={(e) => this.onChangeFormInput(e.target.value)}
            />
          </label>
          <button
            disabled={!this.state.title}
            className="btn btn-primary col-2 m-2"
            type="submit"
          >Add
          </button>
        </form>
      </div>
    );
  }
}

export default MovieForm;