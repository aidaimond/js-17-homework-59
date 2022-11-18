import React from 'react';

interface Props {
  film: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

class MovieCl extends React.Component<Props> {
  render() {
    return (
      <div className="m-3 d-flex border-top">
        <input
          className="m-2 form-control col"
          value={this.props.film}
          onChange={this.props.onChange}
        />
        <button
          className="btn btn-secondary m-2 form-control w-25"
          onClick={this.props.onClick}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default MovieCl;