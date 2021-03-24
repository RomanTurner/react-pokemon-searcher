import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    displayFront: true,
  }

  flipCard = () => {
    this.setState({ displayFront: !this.state.displayFront });
  }
  
  render() {
    const {sprites:{front, back}, name, hp } = this.props.info;
    return (
      <Card>
        <div>
          <div onClick={this.flipCard}className='image'>
            {this.state.displayFront ? (
              <img src={front} alt='oh no!' />
            ) : (
              <img src={back} alt='oh no!' />
            )}
          </div>
          <div className='content'>
            <div className='header'>{name}</div>
          </div>
          <div className='extra content'>
            <span>
              <i className='icon heartbeat red' />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard
