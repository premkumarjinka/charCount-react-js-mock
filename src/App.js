import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CountChar from './components/CountChar'

import './App.css'

// Replace your code here
class App extends Component {
  state = {list: [], input: ''}

  onAddButton = event => {
    event.preventDefault()
    const {input} = this.state
    const details = {
      id: uuidv4(),
      text: input,
      length: input.length,
    }
    this.setState(prevState => ({
      list: [...prevState.list, details],
    }))
    this.setState({input: ''})
  }

  onInputChange = event => {
    this.setState({input: event.target.value})
  }

  render() {
    const {list, input} = this.state
    console.log(list)
    return (
      <div className="container">
        <div className="char-display-container">
          <nav>
            <h1>Count the Characters like a boss</h1>
          </nav>
          {list.length < 1 ? (
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          ) : (
            <ul>
              {list.map(eachItem => (
                <CountChar details={eachItem} key={eachItem.id} />
              ))}
            </ul>
          )}
        </div>
        <form className="input-container" onSubmit={this.onAddButton}>
          <h1 className="heading">Character Counter</h1>
          <input
            placeholder="Enter the characters here"
            type="text"
            className="input"
            value={input}
            onChange={this.onInputChange}
          />
          <button type="submit" onClick={this.onAddButton}>
            Add
          </button>
        </form>
      </div>
    )
  }
}

export default App
