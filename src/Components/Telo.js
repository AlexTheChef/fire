import React from 'react'
import logo from '../logo.gif'
import AuthContext from './AuthContext'

class Telo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: 1,
      aSize: 8
    }
  }

  changeNumber = e => {
    e.preventDefault()

    this.setState({ aSize: this.state.size })
  }



render() {
   
  const {loading, people, handleClick} = this.context
  return (
    <div className='refresh'>
      <div>{(this.state.aSize == 0) ? <div><img src={logo} alt="" /></div> : null}</div>
      { loading || !people ? <h1>...Loading</h1> :
        <div className='telo'>
          {people.slice(0, this.state.aSize).map(person => (<div>
            <div className="person">
              <h5>{person.name.title}</h5>
              <div>{person.name.first}</div>
              <div>{person.name.last}</div>
              <img src={person.picture.large} alt="" />
            </div>
            <br></br>
          </div>
          ))
          }
        </div>}
      <br></br>
      <div className='dugmad'>
        {'Give me new random people:'}
        <button type="button" className="btn btn-dark" onClick={handleClick}>Refresh</button>
        <div className='dugmad'>
          {'Enter number of people you want to show:'}
          <br></br>
          <input type='text' placeholder='Enter number of people' value={this.state.size} onChange={e => this.setState({ ...this.state, size: e.target.value })} />
          <button type="button" className="btn btn-dark" onClick={this.changeNumber}>Go!</button>
        </div>
      </div>
    </div>
  );
}
}

Telo.contextType = AuthContext

export default Telo;