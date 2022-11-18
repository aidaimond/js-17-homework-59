import React from 'react';

interface Props {
  film: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

class MovieCl extends React.Component<Props> {
  render() {
    return (
      <div>
        <input
          value={this.props.film}
          onChange={this.props.onChange}
        />
        <button onClick={this.props.onClick}>
          Delete
        </button>
      </div>
    );
  }
}

export default MovieCl;