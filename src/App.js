import React from 'react'
import './App.css';

 

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello {this.props.header}</h1>
      </div>
    )
  }
}


export default App;