import React, { Component } from 'react'

export default class Progress extends Component {
  render() {
    return (
      <>
        <div class="progress mb-4" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class={`progress-bar nb bg-${this.props.color}`} style={{width: this.props.precentege}} >{this.props.text}</div>
</div>
      </>
    )
  }
}
