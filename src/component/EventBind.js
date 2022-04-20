import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
        // this.clickHeandler = this.clickHeandler.bind(this)
    }
    // clickHeandler() {
    //     this.setState({
    //         message: 'By'
    //     })
    //     // console.log(this)
    // }

    clickHeandler = () => {
        this.setState({
            message: 'By!'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHeandler.bind(this)}>Click</button> */}
                {/* <button onClick={ () => this.clickHeandler()}>Click</button> */}
                <button onClick={this.clickHeandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
