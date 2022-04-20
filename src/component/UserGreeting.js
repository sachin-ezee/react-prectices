import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin: false,
        }
    }
    
  render() {
    return this.state.isLoggedin && <div>Welcome Sachin</div>

    // return (
    //     this.state.isLoggedin ?
    //     (<div>Welcome Sachin</div>) :
    //     (<div>Welcome Guest </div>)
    // )

    // let message
    // if(this.state.isLoggedin){
    //     message = <div>Welcome Sachin</div>
    // }else{
    //     message = <div>Welcome Guest </div>  
    // }
    // return message


    //   if(this.state.isLoggedin){
    //       return (
    //           <div>Welcom Sachin</div>
    //       )
    //   }else{
    //     return ( 
    //             <div>Welcom Guest </div>  
    //       ) 
    //   }


    // return (
    //   <div>
    //       <div>Welcom Sachin </div> 
    //       <div>Welcom Guest </div> 
    //   </div>
    // )
  }
}

export default UserGreeting
