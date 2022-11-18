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

  onChangeFormInput(value: string) {
    this.setState({title: value});
  }

  addMovie(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.props.createMovie({
      id: Math.random().toString(),
      movieName: this.state.title
    });
    this.setState({title: ''});
  }

  render() {
    return (
      <>
        <form
          className="m-3 d-flex"
          onSubmit={(e) => this.addMovie(e)}>
          <label className="m-2 mt-3" htmlFor="createMovie">New Movie
          </label>
          <input
            className="form-control m-2 w-50"
            name="movieName"
            type="text"
            placeholder="Enter movie"
            value={this.state.title}
            onChange={(e) => this.onChangeFormInput(e.target.value)}
          />
          <button
            disabled={!this.state.title}
            className="btn btn-primary m-2 form-control w-25"
            type="submit"
          >Add
          </button>
        </form>
      </>
    );
  }
}

export default MovieForm;