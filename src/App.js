import React, { Component } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {HashRouter as Router,Routes ,Route} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <>
        <Router >
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={4}
     // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
        <Route path="/" element={<News setProgress={this.setProgress} key="general" pageSize={5} country="in" category="general"/>} />
        <Route path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={5} country="in" category="entertainment"/>} />
        <Route path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={5} country="in" category="general"/>} />
        <Route path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={5} country="in" category="health"/>} />
        <Route path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={5} country="in" category="science"/>} />
        <Route path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={5} country="in" category="sports"/>} />
        <Route path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={5} country="in" category="technology"/>} />
        <Route path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={5} country="in" category="business"/>} />
        
      
        
        </Routes>
        </Router>
      </>
    )
  }
}

