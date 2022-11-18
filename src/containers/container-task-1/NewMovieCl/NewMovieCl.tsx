import React from 'react';
import MovieCl from "./MovieCl";
import {Movies} from "../../../types";
import MovieForm from "./MovieForm";

interface State {
  films: Movies[];
}

class NewMovieCl extends React.Component {

  state: State = {
    films: []
  }

  addMovie(newMovie: Movies) {
    this.setState({films: [...this.state.films, newMovie]});
  }

  changeInput(value: string, id: string) {
    const index = this.state.films.findIndex(film => film.id === id);
    const filmsCopy = [...this.state.films];
    const filmCopy = {...this.state.films[index]};
    filmCopy.movieName = value;
    filmsCopy[index] = filmCopy;
    this.setState({films: filmsCopy});
  }

  removeBtn(id: string) {
    const index = this.state.films.findIndex(film => film.id === id);
    const filmsCopy = [...this.state.films];
    filmsCopy.splice(index, 1);
    this.setState({films: filmsCopy});
  }

  render() {
    return (
      <div className="col justify-content-center form-group m-4 border border-2 rounded-1">
        <div>
          <MovieForm
            createMovie={(movie) => this.addMovie(movie)}
          />
        </div>
        <div>
          {this.state.films.map(film => (
            <MovieCl
              key={film.id}
              film={film.movieName}
              onChange={(e) => this.changeInput(e.target.value, film.id)}
              onClick={() => this.removeBtn(film.id)}/>
          ))}
        </div>
      </div>
    );
  }
}

export default NewMovieCl;