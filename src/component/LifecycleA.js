import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
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


    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate() {
    console.log('componentDidUpdate');
    }

    chnageState =() => {
        this.setState({
            name:'ravi'
        })
    }
    render() {
        console.log('render');
        return (
            <div>
                <div>LifecycleA</div>
                <button onClick={this.chnageState}>Chnage State</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA