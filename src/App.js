import { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'

export default class App extends Component {
  render() {
    return (
      <>
      <NavBar/>
       <News/>
      </>
    )
  }
}