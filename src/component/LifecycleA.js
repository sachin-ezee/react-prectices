import React, { Component } from 'react'
import LifecycleB from './LifecycleB.js'
export class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'sachin'
        }
        console.log('constructor');
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {
        console.log('render');
        return (
            <div>
                <div>LifecycleA</div>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA