import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <>
      <div className="col-md-4 px-3">
      <div className={` rounded bg-${this.props.color}`}>
        <div className="p-5">
          <div className="text-white text-center">
            <p>{this.props.text}</p>
          </div>
        </div>
      </div>
      </div>
      </>
    )
  }
}
