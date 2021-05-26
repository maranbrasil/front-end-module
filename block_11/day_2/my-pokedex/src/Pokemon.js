import React from 'react';
import pokemons from './data'

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeigth, image } = this.props.info
    const { value, measurementUnit } = averageWeigth;
    return (
      <div>
        <li>{name}</li>
        <li>{type}</li>
        <li>{averageWeigth}</li>
        <img src={image} alt={`Pokemon ${name}`} />
      </div>
    )
  }
}

export default Pokemon