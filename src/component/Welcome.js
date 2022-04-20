import React , { Component } from 'react'

class Welcome extends Component {
    render() {
        return <h1>Class Comoponent { this.props.name} and { this.props.surname} { this.props.children}</h1>
    } 
}
export  default Welcome;