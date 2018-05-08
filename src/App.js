import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import fetchUsers from './actions/userActions'
import rootReducer from './reducers/index';

class App extends Component {

  constructor(props){
    super(props)
    console.log(this.props)
     //this.props.fetchUsers({type:'FETCH_USERS'})
  }

  componentDidMount() {
   
console.log(this)

   
  }
  componentWillMount() {

    let data = this.props.fetchUsers({type:'FETCH_USERS'})
   
  } 

  renderReminder() {
    const { rootReducer } = this.props
    return (
      <ul className="list-group col-sm-4">
        {
          rootReducer.users.map(reminder => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">
                  <div>{reminder.name}</div>   
                </div>
               
              </li>
            )
          })
        }
      </ul>

      )

  }

  render() {
    
      
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.renderReminder()}
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log('mapstate',state)

  return {
    rootReducer:state
  }
}


const mapDispatchToProps = {
  fetchUsers
 }

export default connect(mapStateToProps,
  mapDispatchToProps
)(App);
