import React, { Component } from 'react'

export default class Head extends Component {
//   constructor(props){
//     super();
// }

  render() {
    return (
      <>
        <h2 className='fs-2 fw-bold text-dark'>{this.props.text}</h2>
      </>
    )
  }
}
