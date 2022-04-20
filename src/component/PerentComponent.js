import React, { Component } from 'react'
import ChildComponet from './ChildComponent'
class PerentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             perentName: 'Perent'
        }
        this.greetPerent = this.greetPerent.bind(this)
    }
    
    greetPerent(childName) {
        alert(`Hello ${this.state.perentName} from ${childName}`)
    }

    render() {
        return (
        <div>
            <ChildComponet  greetHandler={this.greetPerent}/>
        </div>
        )
    }
}

export default PerentComponent
