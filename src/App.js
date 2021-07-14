import react from 'react'
import React, { Component } from 'react';
import './App.css' 
import axios from 'axios'

class App extends Component {
    state={
        advice:''
    }

    componentDidMount(){
        this.fetchAdvice()
    }

    fetchAdvice = () => {
        axios.get("https://api.adviceslip.com/advice")
        .then((res)=>{
            const { advice } = res.data.slip
            
            this.setState({advice:advice})
        })
        .catch((err)=>{

        })
    }

    render() {
        return (
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'>{this.state.advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}><span>Advice</span></button>
                </div>
            </div>
        );
    }
}

export default App;