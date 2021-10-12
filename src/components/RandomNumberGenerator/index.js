import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  changeNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="main-heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.changeNumber}>
            Generate
          </button>
          <p className="result">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
