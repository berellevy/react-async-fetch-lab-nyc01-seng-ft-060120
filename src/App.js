import React, { Component } from 'react'


class App extends Component {
    
    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(data => {console.log(data)})
        .catch(error => console.log(error))
        
    }

    render() {
        return <h1>App</h1> 
    }
}


export default App